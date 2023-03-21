CREATE DATABASE jewelShop;

CREATE TABLE `user` (
	`id` INT (11),
	`firstName` VARCHAR (765),
	`lastName` VARCHAR (765),
	`username` VARCHAR (765),
	`email` VARCHAR (765),
	`state` CHAR (21),
	`phone` VARCHAR (765),
	`hash` VARCHAR (765),
	`status` CHAR (30),
	`address` VARCHAR (765),
	`zip` VARCHAR (765),
	`city` VARCHAR (765),
	`region` VARCHAR (765),
	`country` VARCHAR (765),
	`photo` VARCHAR (765),
	`is_admin` TINYINT (1),
	`is_reseller` TINYINT (1),
	`is_marketplace` TINYINT (1),
	`password_reset_token` VARCHAR (765),
	`auth_key` VARCHAR (765),
	`ip` VARCHAR (90),
	`meta_field` VARCHAR (765),
	`access_token` VARCHAR (180),
	`last_seen` INT (11),
	`login_attempts` INT (11),
	`locked_time` DATETIME ,
	`company_name` VARCHAR (765),
	`no_of_employees` VARCHAR (765),
	`role` VARCHAR (765),
	`verification_code` VARCHAR (765),
	`terms_conditions` TINYINT (1),
	`purpose_of_using` VARCHAR (150),
	`date_created` DATETIME ,
	`date_updated` DATETIME ,
	`createdAt` DATETIME ,
	`updatedAt` DATETIME
);


DESCRIBE user;