CREATE TABLE IF NOT EXISTS 

    products (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        name VARCHAR(500) NOT NULL,

        description VARCHAR(500) NOT NULL,

        brand VARCHAR(500) NOT NULL,

        imageUrl VARCHAR(500) NOT NULL,

        price FLOAT NOT NULL,

        category VARCHAR(500) NOT NULL,

        createdAt TIMESTAMP NOT NULL,

        updatedAt TIMESTAMP NOT NULL


    );


CREATE TABLE IF NOT EXISTS 

    reviews (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        comment VARCHAR(500) NOT NULL,

        rate INTEGER NOT NULL,
        
        createdAt TIMESTAMP NOT NULL,

		productid INTEGER NOT NULL,
		
        FOREIGN KEY (productid) REFERENCES products
	
    );
