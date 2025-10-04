-- Create the application database
CREATE DATABASE IF NOT EXISTS landing_pad_digital;

-- Use the created database
USE landing_pad_digital;

-- Create the application table
CREATE TABLE `landing_pad_digital`.`user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `landing_pad_digital`.`plan` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(255) DEFAULT NULL,
  `price` integer DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO landing_pad_digital.plan(plan_name, price)
VALUES
('Professional', 1250),
('Premium', 2500);

CREATE TABLE `landing_pad_digital`.`subscription` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `plan_id` int unsigned NOT NULL,
  `start_at` date NOT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
