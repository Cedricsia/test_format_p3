CREATE TABLE eating.ingredient (
	Id INT auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	Categorie varchar(100) NOT NULL,
	`valeur nutri` json NOT NULL,
	CONSTRAINT ingredient_PK PRIMARY KEY (Id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE eating.recettes (
	Id INT auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	step json NOT NULL,
	CONSTRAINT recettes_PK PRIMARY KEY (Id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE eating.recette_ingredient (
	ID INT auto_increment NOT NULL,
	Column1 DECIMAL NOT NULL,
	CONSTRAINT recette_ingredient_PK PRIMARY KEY (ID),
	CONSTRAINT recette_ingredient_FK FOREIGN KEY (ID) REFERENCES eating.ingredient(Id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT recette_ingredient_FK_1 FOREIGN KEY (ID) REFERENCES eating.recettes(Id) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
