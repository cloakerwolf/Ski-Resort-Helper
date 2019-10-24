# Ski Resort Helper (Desktop)

*Project Duration: 2 Week Sprint*

I have been having a hard time over the years picking which ski resorts to visit and wanted any easier way to decide which one to go to. Some times when i would get to a ski resort i would find out that there is a bunch of ski schools visiting that day so i would not be able to snowboard as much as i would like. I created Ski Resort Helper so members could share their experiences with each other and give the heads up for when a place is usually packed or any other information that pertains to the ski resort. This app is made for ski and snowboarding enthusiast. Ski Resort Helper allows people to look at a list of ski resorts around Minnesota and see details about each one. When you go into the details of a ski resort you are able to leave a rating and comments from your experience at the hill. This will allow other people to see the things that a person said and decide if that is a place they would like to visit. After a ski resort has been rated and commented on it will go into the list of hills that person has visited so they can quickly look up their past experiences and see what others have said about those ski resort since the last time they were there. 

## Application Screen Shot
![hillList](documentation/images/hillList.png)
![hillRating](documentation/images/hillRating.png)
![hillDescription](documentation/images/hillDescription.png)

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Create database and table

Create a new database called `prime_app` and create the following tables:

```SQL
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "full_name" VARCHAR (80) NOT NULL,
    "email" VARCHAR (80) NOT NULL,
    "admin" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "hills"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) UNIQUE NOT NULL,
    "description" VARCHAR (1000) NOT NULL,
    "picture" VARCHAR (200) NOT NULL,
    "pic_gen_area" VARCHAR (200) NOT NULL,
    "address" VARCHAR (100) NOT NULL,
    "number_of_lifts" INTEGER,
    "terrain_park" INTEGER,
    "snowmaking" BOOLEAN DEFAULT FALSE,
    "trails" INTEGER,
    "website_url" VARCHAR (250) NOT NULL
);

CREATE TABLE "visits"
(
    "id" SERIAL PRIMARY KEY,
    "username_id" INT REFERENCES "user",
    "hill_id" INT REFERENCES "hills",
    "rating" INTEGER,
    "comments" VARCHAR (400) NOT NULL
);
```

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

* Start postgres if not running already by using `brew services start postgresql`

* Run `npm run server`

* Run `npm run client`

* Navigate to `localhost:3000`

## How to use Ski Resort Helper

* Login/Register for an account in order to sign into Ski Resort Helper

* Click on a ski resort that you want to veiw or have visited and it takes you into the description of that resort

* The hills description page gives you a description of the hill that you clicked on. This page also allows you to add a visit in which you can share your rating and comments of your visit. 

* If you want to go to the actual site of each of the hills you can click on the link toward the bottom of the hill description page and you will be sent to that site in a new tab

* After you have rated and commented on a hill you will be able to see that hill in your hills visited page

## Future Features 

* Deploy to Heroku

* Format for mobile devices

* Introduce Google Maps API so members can be routed to the ski resorts

* Make it so members can send new hill information to the Admin so more hills can be added to the list of hills

* Add a search bar to the hills list to make it easier to find the hill members are looking for

## Built With

* [React](http://reactjs.org) 

* Redux

* Express

* Passport

* [PostrgeSQL](https://www.postgresql.org/)

* Material-UI











If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`




## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum. 

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
    1. `POST /api/user/register` registers a new user, see body to change username/password
    2. `POST /api/user/login` will login a user, see body to change username/password
    3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

* src/components
  * App/App
  * Footer/Footer
  * Nav/Nav
  * AboutPage/AboutPage
  * InfoPage/InfoPage
  * UserPage/UserPage
  * LoginPage/LoginPage
  * RegisterPage/RegisterPage
  * LogOutButton/LogOutButton
  * ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
