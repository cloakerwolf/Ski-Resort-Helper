
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

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


INSERT INTO "hills"
    ("name", "description", "picture", "pic_gen_area", "address", "number_of_lifts", "terrain_park", "snowmaking", "trails", "website_url")
VALUES
    ('Lutsen Mountains', 'Largest and highest ski hill with 4 mountains in mid America. Lutsen offers lodging at the base of the mountain. Some of the resort features include snowboarding, skiing, cross country skiing and snowshoe trails', 'http://www.skicentral.com/assets/images/trailmaps/218003-1200.jpg', 'https://skiliftblog.files.wordpress.com/2018/03/page_274_lutsen-mountains-expanded-ski-area-master-plan.jpg', '467 Ski Hill Rd, Lutsen, MN 55612', '9', '4', 'yes', '92', 'https://www.lutsen.com/');