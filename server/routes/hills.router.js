const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
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



//delete
router.delete('/:id', (req, res) => {
    let id = req.params.id
    let queryText = `DELETE FROM "hills" WHERE id = $1`
    console.log('in Delete id:', id);


    pool.query(queryText, [id])
        .then((result) => {
            console.log('in DELETERouter:', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('in DELETERouter ERROR:', error);
            res.sendStatus(500);
        })
})

module.exports = router;