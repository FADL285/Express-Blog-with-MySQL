# Express-Blog-with-MySQL
Using MySQL in Node &amp; Express to build Simple CRUD App ( Blog )


## Project setup
```
npm install
```

### Add DB Configuration

> copy `.env.example` to `.env` and Add your DB configuration.


### Create Database Tables:

Authors Table:
```sql
CREATE TABLE `authors` (
  `id`  INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```

Posts Table:
```sql
CREATE TABLE `posts` (
  `id`  INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `summary` VARCHAR(255) NOT NULL,
  `body` TEXT NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`id`)
);
```

### Run the Project
```
npm start
```

### Lints and fixes files
```
npm run format
```
```
npm run lint
```
