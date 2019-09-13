const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for all hills
 */
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "hills" ORDER BY "id" DESC;';
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error getting hills', error);
            res.sendStatus(500);
        });
});

/**
 * GET route for specific hill
 */
router.get('/:id', (req, res) => {
    //return movie for specific id with genre
    let id = req.params.id;
    let queryText =
        `SELECT * FROM "hills" WHERE "id" = $1;
        `;
    pool.query(queryText, [id])
        .then((result) => {
            console.log('Success GET from specific hill router');
            res.send(result.rows[0]);
        })
        .catch((error) => {
            console.log('Error in GET in specific hill router', error);
            res.sendStatus(500);

        });
});


//update the everything for a specific hill
router.put('/', (req, res) => {
    let edit = req.body;
    console.log('in PUT request of router.put', edit);
    const queryText = 
                      `UPDATE "hills"
                      SET "name" = $1, "description" = $2, "picture" =$3, "pic_gen_area" = $4, "address" = $5, "number_of_lifts" = $6, "terrain_park" = $7, "snowmaking" = $8, "trails" = $9, "website_url" = $10
                      WHERE "id" = $11;`;
    pool.query(queryText, [edit.name, edit.description, edit.picture, edit.pic_gen_area, edit.address, edit.number_of_lifts, edit.terrain_park, edit.snowmaking, edit.trails, edit.website_url, edit.id])
        .then(result => {
            console.log('results in edit router', result);
            
            res.sendStatus(201);
        }).catch(error => {
            console.log('error in PUT request of router.put', error);

            res.sendStatus(500);
        })

})



/**
 * POST route template
 */
router.post('/', (req, res) => {
    let newhill = req.body;
    console.log('adding hill', newhill);

    let queryText =
        `INSERT INTO "hills" (name, description, picture, pic_gen_area, address, number_of_lifts, terrain_park, snowmaking, trails, website_url)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
    pool.query(queryText, [newhill.name, newhill.description, newhill.picture, newhill.pic_gen_area, newhill.address, newhill.number_of_lifts, newhill.terrain_park, newhill.snowmaking, newhill.trails, newhill.website_url])
        .then(results => {
            
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error adding newhill', error);
            res.sendStatus(500);

        })

})



//delete the comments attached to a specific hill then delete the hill
router.delete('/:id', (req, res) => {
    let id = req.params.id
    
    let queryText1 = `DELETE FROM "visits"
                      WHERE "visits".hill_id = $1;`;
                                        
    
    console.log('in Delete id:', id);


    pool.query(queryText1, [id])
        .then((result) => {
            let querytext2 = `DELETE FROM "hills" WHERE id = $1;`;
            pool.query(querytext2, [id])
                .then((result) => {
                    console.log('in DELETERouter:', result);
                    res.sendStatus(200);
                }).catch((error) => {
                    console.log('in DELETERouter ERROR:', error);
                    res.sendStatus(500);
                })
            console.log('in DELETERouter:', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('in DELETERouter ERROR:', error);
            res.sendStatus(500);
        })
})


router.post('/comment', (req, res) => {
    console.log('req.user:', req.user);
    console.log('req.body', req.body);
    
    let comment = req.body;
    let userId = req.user.id;
    let queryText = `INSERT INTO "visits" ("username_id", "hill_id", "rating", "comments")
                     VALUES ($1, $2, $3, $4);`;
            pool.query(queryText, [userId, comment.id, comment.rating, comment.comments])
            .then(results => {
                console.log('Results POST of Comments router:', results);
                res.sendStatus(201);
                
            })
            .catch(error =>{
                console.log('Error Post of Comments router:', error);
                res.sendStatus(500);
            })
})


//grab the usernames that go with each of the comments for  the specified hill
router.get('/comment/:id', (req, res) => {
    //return comments with a username for specific id of a hill
    let id = req.params.id;
    let queryText =
                `
                SELECT "user".username AS "user",  "visits".comments AS "comments"
                FROM "visits" 
                JOIN "user" ON "user".id = "visits".username_id
                WHERE "visits".hill_id = $1;
                `;
        // `
        // SELECT ROUND(AVG("visits".rating), 0) AS "rating", array_agg("visits".comments) AS "comments"
        //  FROM "visits" 
        //  WHERE "visits".hill_id = $1
        //  GROUP BY "hill_id";
        // `;
    pool.query(queryText, [id])
        .then((result) => {
            console.log('Success GET from comments router');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in GET in comments router', error);
            res.sendStatus(500);

        });
});

//grab the average rating for the specified hill id
router.get('/rating/:id', (req, res) => {
    //return average hill rating for a specific hill
    let id = req.params.id;
    let queryText =
                `
                SELECT ROUND(AVG("visits".rating), 0) AS "rating"
                FROM "visits"
                WHERE "visits".hill_id = $1;
                `
    
    pool.query(queryText, [id])
        .then((result) => {
            console.log('Success GET from rating router');
            res.send(result.rows[0]);
        })
        .catch((error) => {
            console.log('Error in GET in rating router', error);
            res.sendStatus(500);

        });
});

module.exports = router;