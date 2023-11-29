DROP DATABASE IF EXISTS `ads_management_practice`;
CREATE DATABASE `ads_management_practice`;
USE `ads_management_practice`;

-- Hình thức quảng cáo
DROP TABLE IF EXISTS `ads_category`;
CREATE TABLE `ads_category` (
	`ads_category_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`ads_category_name` VARCHAR(255),
	
	PRIMARY KEY(`ads_category_id`)
);

-- Loại địa điểm
DROP TABLE IF EXISTS `location_type`;
CREATE TABLE `location_type` (
	`location_type_id` INT unsigned NOT NULL AUTO_INCREMENT,
	`location_type_name` VARCHAR(255),
	
	PRIMARY KEY(`location_type_id`)
);

-- Địa điểm đặt quảng cáo
DROP TABLE IF EXISTS `ads_location`;
CREATE TABLE `ads_location` (
	`ads_location_id` INT unsigned NOT NULL AUTO_INCREMENT, 
	`address` VARCHAR(512),
	`location_type` INT unsigned,
	`ads_category` INT unsigned,
	
	PRIMARY KEY(`ads_location_id`)
);

-- Them khoa ngoai
ALTER TABLE `ads_location` ADD CONSTRAINT FOREIGN KEY (`location_type`) 
REFERENCES `location_type` (`location_type_id`);
ALTER TABLE `ads_location` ADD CONSTRAINT FOREIGN KEY (`ads_category`) 
REFERENCES `ads_category` (`ads_category_id`);

--  Insert dữ liệu




