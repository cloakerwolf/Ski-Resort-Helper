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

* [Redux](http://redux.js.org)

* [Express](http://expressjs.com)

* [Passport](http://www.passportjs.org)

* [PostrgeSQL](https://www.postgresql.org/)

* [Material-UI](http://material-ui.com)

## Acknowledgements

* A huge thanks to [Prime Digital Academy](https://primeacademy.io/) in Minneapolis, and my instructors Dane Smith and Kris Szafranski for providing me with great instruction and the tools to develop this application.

* Special thanks to my aunt who got me started in winter activities when I was a child.
