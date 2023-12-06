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
    `lat`FLOAT,
    `long` FLOAT,
    `is_planned` BOOL DEFAULT FALSE,
    -- `ads_location_status` ENUM('0','1','2','3','4') DEFAULT '0',
   `ads_location_status` SMALLINT UNSIGNED DEFAULT 0,
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

-- Loại biển quảng cáo
DROP TABLE IF EXISTS `billboard_type`;
CREATE TABLE `billboard_type` (
	`billboard_type_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`billboard_type_name` VARCHAR(255),
	
	PRIMARY KEY(`billboard_type_id`)
);

Insert billboard_type (billboard_type_name) values
('Trụ bảng hiflex'),
('Trụ màn hình điện tử LED'),
('Trụ hộp đèn'),
('Bảng hiflex ốp tường'),
('Màn hình điện tử ốp tường'),
('Trụ treo băng rôn dọc'),
('Trụ treo băng rôn ngang'),
('Trụ/Cụm pano, Cổng chào'),
('Trung tâm thương mại');


-- Biển quảng cáo
DROP TABLE IF EXISTS `ads`;
CREATE TABLE `ads` (
	`ads_id` INT  NOT NULL AUTO_INCREMENT, 
    `title` varchar(255),
    `content` TEXT,
	`start_date` DATE,
    `end_date` DATE,
    `height` INT,
    `width` INT, 
    `price` FLOAT,
    
    -- Để dễ dàng, khỏi phải join table, lưu danh sách tên hình ảnh, lấy và cắt ra là được
	`images` TEXT,
    -- Loai bien quang cao
    `billboard_type` INT UNSIGNED,
    -- Dia diem dat bien quang cao
	`ads_location` INT UNSIGNED, 

    `is_planned` BOOL DEFAULT FALSE,
    -- `status` ENUM('0','1','2','3','4') DEFAULT '0',
    `ads_status` SMALLINT UNSIGNED DEFAULT 0,
    
	PRIMARY KEY(`ads_id`)
);
ALTER TABLE `ads` ADD CONSTRAINT FOREIGN KEY (`billboard_type`) 
REFERENCES `billboard_type` (`billboard_type_id`);
ALTER TABLE `ads` ADD CONSTRAINT FOREIGN KEY (`ads_location`) 
REFERENCES `ads_location` (`ads_location_id`);

-- alter table `ads` add `ads_status` SMALLINT UNSIGNED;

-- Hình ảnh
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
	`image_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	
    `file_name` VARCHAR(255),
    `path` VARCHAR(255),
    `extension` vARCHAR(10),
    
    `original_name` VARCHAR(255),
    `original_size` float,
	`original_mime_type` varchar(255),
    
    `created_at` datetime default current_timestamp,
	PRIMARY KEY(`image_id`)
);










