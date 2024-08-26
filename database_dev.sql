-- Prepares a Mysql server for the project

CREATE DATABASE IF NOT EXISTS adet_dev_db;
CREATE USER IF NOT EXISTS 'adet_dev'@'localhost' IDENTIFIED BY 'adet_dev_pwd';
GRANT ALL PRIVILEGES ON 'adet_dev_db' .* 'adet_dev'@'localhost';
GRANT SELECT ON 'performance_schema' .* TO 'adet_dev'@'localhost';
FLUSH PRIVILEGES;