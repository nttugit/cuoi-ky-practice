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
	`ads_location_id` INT  NOT NULL AUTO_INCREMENT, 
	`ads_category` INT UNSIGNED,
    `location_type` INT UNSIGNED,
    
	`address` VARCHAR(512),
    `is_planned` BOOL DEFAULT FALSE,
    `status` ENUM('0','1','2','3','4') DEFAULT '0',
    
	PRIMARY KEY(`ads_location_id`)
);

-- Them khoa ngoai
ALTER TABLE `ads_location` ADD CONSTRAINT FOREIGN KEY (`location_type`) 
REFERENCES `location_type` (`location_type_id`);
ALTER TABLE `ads_location` ADD CONSTRAINT FOREIGN KEY (`ads_category`) 
REFERENCES `ads_category` (`ads_category_id`);

--  Insert dữ liệu
Insert ads_category (ads_category_name) values
('Cổ động chính trị'),
('Quảng cáo thương mại'),
('Xã hội hoá');

Insert location_type (location_type_name) values
('Đất công'),
('Công viên'),
('Hành lang an toàn giao thông'),
('Đất tư nhân'),
('Nhà ở riêng lẻ'),
('Trung tâm thương mại'),
('Chợ'),
('Cây xăng'),
('Nhà chờ xe buýt');