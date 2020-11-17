
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "Sneakers" (
	"id" SERIAL PRIMARY KEY,
	"Brand" VARCHAR (30),
	"Name" VARCHAR (30),
	"Size" INT ,
	"Condition" VARCHAR (30),
	"Seller_id" INT NULL,
	"sold" boolean DEFAULT FALSE
);

CREATE TABLE "Favorites" (
	"id" SERIAL PRIMARY KEY, 
	"user_id" VARCHAR (30) UNIQUE NOT NULL,
	"sneaker_id" INT
);

CREATE TABLE "Cart" (
	"id" SERIAL PRIMARY KEY, 
	"user_id" VARCHAR (30),
	"order_completed" BOOLEAN,
	"sneaker_id" INT
);

INSERT INTO "Sneakers" ("Brand", "Name", "Size", "Condition")
VALUES ('Jordan', 'Cherry', 9, 'Brand New' );

INSERT INTO "Sneakers" ("Brand", "Name", "Size", "Condition")
VALUES ('Jordan', 'Top 3', 9, 'Brand New' ),
('Nike', 'Air Force 1', 9, 'Brand New'),
('Yeezy', '350 V2 Bred', 9, 'Brand New'),
('Jordan', 'White Cement', 9, 'Brand New');


INSERT INTO "Shopping Cart" ("sneaker_id")
VALUES (2);

INSERT INTO "Cart" ("sneaker_id")
VALUES (3);

UPDATE "Sneakers"
  SET
  "Size" = 9
  WHERE 
  "id" = 3;
  
SELECT * from "Cart";

SELECT ("Brand", "Name","Size", "Condition")
FROM "Sneakers"
WHERE  "Sneaker_id" IN ( SELECT "sneaker_id" FROM "Cart" ) ;

INSERT INTO "Sneakers" ("Brand", "Name", "Size", "Condition")
VALUES ('Off-White Jordan', 'Sail', 9, 'Used') ;

SELECT *
    FROM "Sneakers"
    WHERE  "id" IN ( SELECT "sneaker_id" FROM "Cart"
 WHERE "user_id"::integer = 3);
 
 DELETE 
    FROM "Sneakers" 
    WHERE "id" IN ( SELECT "sneaker_id" FROM "Cart" 
    WHERE "user_id"::integer = 3);
    
    DELETE 
    FROM "Cart" 
    WHERE "user_id"::integer = 8 AND 
    "sneaker_id"::integer = 15;
    
    SELECT sneaker_id FROM "Cart"
    WHERE "user_id"::int = 9;
    
    
    
    UPDATE "Sneakers" 
    SET "sold" = TRUE
    WHERE "id" IN (SELECT sneaker_id FROM "Cart"
    WHERE "user_id"::int = 18);
    
    