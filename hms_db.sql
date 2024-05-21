-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 14, 2024 at 07:31 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `allot`
--

CREATE TABLE `allot` (
  `equipment_id` int NOT NULL,
  `room_no` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `allot`
--

INSERT INTO `allot` (`equipment_id`, `room_no`) VALUES
(1, 101),
(7, 101),
(10, 101),
(2, 102),
(3, 103),
(5, 104),
(4, 105),
(6, 105),
(8, 106),
(9, 107),
(11, 201),
(13, 202),
(14, 203),
(16, 204),
(12, 205),
(15, 205),
(17, 205);

-- --------------------------------------------------------

--
-- Table structure for table `ambulance`
--

CREATE TABLE `ambulance` (
  `amb_id` int NOT NULL,
  `vehicle_no` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ambulance`
--

INSERT INTO `ambulance` (`amb_id`, `vehicle_no`, `type`) VALUES
(1, 'GJ01RH3715', 'Basic Life Support Ambulance'),
(2, 'GJ01DF1543', 'Basic Life Support Ambulance'),
(3, 'GJ01SK6392', 'Mobile ICU Ambulance');

-- --------------------------------------------------------

--
-- Table structure for table `ambulance_services`
--

CREATE TABLE `ambulance_services` (
  `emp_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `amb_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ambulance_services`
--

INSERT INTO `ambulance_services` (`emp_id`, `patient_id`, `date_of_admittance`, `amb_id`) VALUES
(222, 432, '2020-05-17', 2),
(222, 436, '2020-05-24', 1),
(222, 441, '2021-05-06', 3),
(223, 432, '2020-02-20', 2),
(223, 437, '2020-03-26', 2),
(223, 438, '2020-10-29', 1);

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `doctor_emp_id` int NOT NULL,
  `rec_emp_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `appointment_id` int NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`doctor_emp_id`, `rec_emp_id`, `patient_id`, `date_of_admittance`, `appointment_id`, `date`) VALUES
(207, 227, 432, '2020-02-20', 1, '2020-02-13'),
(207, 227, 432, '2020-05-17', 4, '2020-05-12'),
(209, 228, 433, '2020-09-22', 2, '2020-09-18'),
(210, 228, 434, '2020-03-27', 3, '2020-03-25'),
(212, 229, 435, '2020-01-19', 5, '2020-01-12');

-- --------------------------------------------------------

--
-- Table structure for table `cashier`
--

CREATE TABLE `cashier` (
  `emp_id` int NOT NULL,
  `counter_no` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cashier`
--

INSERT INTO `cashier` (`emp_id`, `counter_no`) VALUES
(224, 1),
(225, 2),
(226, 3);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_name` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `budget` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_name`, `budget`) VALUES
('OPD', 20000),
('OT Complex', 100000),
('Paramedical', 30000),
('Radiology', 50000);

-- --------------------------------------------------------

--
-- Table structure for table `department_floor`
--

CREATE TABLE `department_floor` (
  `dept_name` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `floor` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `department_floor`
--

INSERT INTO `department_floor` (`dept_name`, `floor`) VALUES
('OPD', 1),
('OT Complex', 2),
('Paramedical', 1),
('Radiology', 2);

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `emp_id` int NOT NULL,
  `specialization` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`emp_id`, `specialization`) VALUES
(206, 'Anesthesiologist'),
(207, 'Dermatologist'),
(208, 'Endocrinologist'),
(209, 'Family Physician'),
(210, 'Family Physician'),
(211, 'Neurologist'),
(212, 'Pediatrician'),
(213, 'Radiologist'),
(214, 'Radiologist');

-- --------------------------------------------------------

--
-- Table structure for table `doc_dept`
--

CREATE TABLE `doc_dept` (
  `emp_id` int NOT NULL,
  `dept_name` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doc_dept`
--

INSERT INTO `doc_dept` (`emp_id`, `dept_name`) VALUES
(207, 'OPD'),
(209, 'OPD'),
(210, 'OPD'),
(212, 'OPD'),
(206, 'OT Complex'),
(211, 'OT Complex'),
(208, 'Paramedical'),
(213, 'Radiology'),
(214, 'Radiology');

-- --------------------------------------------------------

--
-- Table structure for table `doc_offices`
--

CREATE TABLE `doc_offices` (
  `emp_id` int NOT NULL,
  `office_no` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doc_offices`
--

INSERT INTO `doc_offices` (`emp_id`, `office_no`) VALUES
(206, 102),
(207, 103),
(208, 104),
(209, 201),
(210, 202),
(211, 203),
(212, 204),
(213, 205),
(214, 206);

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `emp_id` int NOT NULL,
  `license_no` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`emp_id`, `license_no`) VALUES
(222, 'GJ02 20193456721'),
(223, 'GJ01 20183139319');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int NOT NULL,
  `first_name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middle_name` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` date NOT NULL,
  `gender` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `joining_date` date NOT NULL,
  `salary` int NOT NULL,
  `qualification` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `house_no` int NOT NULL,
  `street` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin_code` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `first_name`, `middle_name`, `last_name`, `dob`, `gender`, `joining_date`, `salary`, `qualification`, `house_no`, `street`, `city`, `pin_code`) VALUES
(205, 'Julian', 'H', 'Wilson', '1970-08-17', 'Female', '2020-07-07', 73000, 'MD', 33, 'Lismore Villas', 'Agra', 352898),
(206, 'Cherry', 'R', 'Fowler', '1985-06-19', 'Female', '2009-10-15', 19000, 'MD', 18, 'Monks Cliff', 'Rourkela', 309411),
(207, 'Emily', 'Y', 'Carroll', '1977-03-26', 'Female', '1992-12-08', 31000, 'MD', 59, 'Piper West', 'Berhampur', 348489),
(208, 'Lucy', 'S', 'Ryan', '1970-07-16', 'Female', '2015-04-06', 92000, 'MBBS', 80, 'Oakdale Willows', 'Jaunpur', 379664),
(209, 'Agata', 'G', 'Carter', '1981-02-07', 'Male', '2001-12-26', 17000, 'MBBS', 2, 'Brambling Town', 'Hindupur', 361891),
(210, 'Maria', 'B', 'Richards', '1972-07-29', 'Male', '2009-07-07', 85000, 'MD', 85, 'Watery Strand', 'Tadepalligudem', 353289),
(211, 'Emma', 'F', 'Turner', '1973-09-09', 'Male', '2012-11-23', 22000, 'MD', 89, 'Windermere Drift', 'Jaipur', 307026),
(212, 'Walter', 'A', 'Gibson', '1979-09-08', 'Female', '1999-11-05', 73000, 'MD', 6, 'Cowley Mount', 'Coimbatore', 324710),
(213, 'David', 'R', 'Foster', '1975-07-15', 'Female', '2003-06-29', 85000, 'MBBS', 32, 'Furze Spur', 'Chennai', 363798),
(214, 'Aston', 'U', 'Richards', '1973-11-03', 'Male', '2018-06-28', 81000, 'MBBS', 11, 'Crawford Cloisters', 'Motihari', 357370),
(215, 'Ada', 'I', 'Fowler', '1988-02-25', 'Female', '2010-04-12', 37000, 'GNM', 57, 'Broad North', 'Jammu', 370025),
(216, 'Sarah', 'O', 'Smith', '1980-06-12', 'Male', '2007-01-01', 24000, 'ANM', 77, 'Amberley Broadway', 'Serampore', 371051),
(217, 'Oscar', 'P', 'Thomas', '1971-05-29', 'Male', '1997-10-12', 23000, 'ANM', 15, 'Old Crosby', 'Aurangabad', 358591),
(218, 'Harold', 'Q', 'Andrews', '1976-07-27', 'Male', '2021-12-02', 49000, 'ANM', 43, 'Beeston Cliff', 'Solapur', 362246),
(219, 'Daniel', 'W', 'Armstrong', '1985-05-15', 'Female', '2004-10-06', 60000, 'GNM', 76, 'North Village', 'Tadepalligudem', 380861),
(220, 'Paul', 'E', 'Thomas', '1977-12-02', 'Female', '2009-10-05', 43000, 'GNM', 71, 'Christopher Pleasant', 'Tiruchirappalli', 304249),
(221, 'Andrew', 'V', 'Brown', '1977-05-02', 'Male', '2012-12-24', 28000, 'ANM', 65, 'Charnwood Barton', 'Satna', 354573),
(222, 'Adison', 'C', 'Morris', '1987-07-10', 'Female', '1992-11-25', 68000, '12th pass', 18, 'Dovecote Knoll', 'Mira-Bhayandar', 319173),
(223, 'Alen', 'X', 'Johnson', '1985-12-27', 'Male', '2014-03-19', 29000, '10th pass', 98, 'Alma Avenue', 'Ratlam', 386301),
(224, 'Lilianna', 'S', 'Martin', '1973-07-07', 'Female', '1998-05-31', 36000, 'B. Com', 39, 'Percival Orchards', 'Rae Bareli', 344075),
(225, 'Blake', 'R', 'Ross', '1984-07-09', 'Female', '1997-05-13', 33000, 'B. Com', 13, 'Chittock Gate', 'Asansol', 366313),
(226, 'Robert', 'V', 'Fowler', '1986-10-24', 'Female', '2011-02-27', 19000, 'B. Com', 69, 'Sunny Lawns', 'Bettiah', 302962),
(227, 'Kate', 'H', 'Montgomery', '1986-09-16', 'Female', '2000-08-14', 11000, 'BA', 77, 'Garfield Grove', 'Murwara', 352615),
(228, 'Eddy', 'F', 'Owens', '1984-07-24', 'Female', '2007-11-13', 62000, 'BA', 19, 'Greenside Knoll', 'Howrah', 397280),
(229, 'Maddie', 'D', 'Riley', '1986-10-30', 'Male', '2022-01-08', 62000, 'BA', 38, 'Popplewell Terrace', 'Surendranagar Dudhrej', 325286);

-- --------------------------------------------------------

--
-- Table structure for table `employee_phone_no`
--

CREATE TABLE `employee_phone_no` (
  `emp_id` int NOT NULL,
  `phone_no` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_phone_no`
--

INSERT INTO `employee_phone_no` (`emp_id`, `phone_no`) VALUES
(205, '5853440378'),
(206, '2613910107'),
(206, '5739728956'),
(207, '7609606066'),
(208, '4516542091'),
(209, '6180226253'),
(210, '8561258157'),
(211, '2486465239'),
(212, '8195639028'),
(213, '5757118376'),
(214, '6961136958'),
(215, '58501458'),
(216, '5426370317'),
(217, '7748621316'),
(218, '3199590826'),
(219, '5083136142'),
(219, '9061253835'),
(220, '470778793'),
(221, '8152734851'),
(221, '8961788945'),
(222, '5730999117'),
(222, '9853348301'),
(223, '1272787248'),
(224, '6407764818'),
(225, '7015405691'),
(225, '7210814309'),
(226, '9681331255'),
(227, '7442335675'),
(228, '1998536620'),
(228, '2002818417'),
(229, '8093001583');

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE `equipment` (
  `equipment_id` int NOT NULL,
  `purchase_date` date NOT NULL,
  `name` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`equipment_id`, `purchase_date`, `name`) VALUES
(1, '2016-03-04', 'equipment-0-01'),
(2, '2016-03-04', 'equipment-0-02'),
(3, '2016-03-04', 'equipment-0-03'),
(4, '2016-03-04', 'equipment-0-04'),
(5, '2016-03-04', 'equipment-0-05'),
(6, '2016-04-04', 'equipment-1-01'),
(7, '2016-04-04', 'equipment-1-02'),
(8, '2016-04-04', 'equipment-1-03'),
(9, '2016-04-04', 'equipment-1-04'),
(10, '2016-05-04', 'equipment-2-01'),
(11, '2016-05-04', 'equipment-2-02'),
(12, '2016-05-04', 'equipment-2-03'),
(13, '2017-06-07', 'new-equipment-0-01'),
(14, '2017-06-07', 'new-equipment-0-02'),
(15, '2017-06-07', 'new-equipment-0-03'),
(16, '2017-07-08', 'new-equipment-1-01'),
(17, '2017-07-08', 'new-equipment-1-02');

-- --------------------------------------------------------

--
-- Table structure for table `gets`
--

CREATE TABLE `gets` (
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `room_no` int NOT NULL,
  `prescription` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gets`
--

INSERT INTO `gets` (`patient_id`, `date_of_admittance`, `room_no`, `prescription`, `date`) VALUES
(432, '2020-02-20', 101, 'presc-001', '2020-02-21'),
(432, '2020-02-20', 101, 'presc-002', '2020-02-21'),
(432, '2020-05-17', 101, 'presc-003', '2020-05-18'),
(432, '2021-02-17', 101, 'presc-019', '2021-02-18'),
(440, '2020-01-20', 103, 'presc-014', '2020-01-21'),
(433, '2020-09-22', 104, 'presc-004', '2020-09-23'),
(434, '2020-03-27', 105, 'presc-005', '2020-03-28'),
(441, '2021-05-06', 106, 'presc-015', '2021-05-07'),
(435, '2020-01-19', 107, 'presc-006', '2020-01-20'),
(436, '2020-05-24', 201, 'presc-007', '2020-05-25'),
(437, '2020-03-26', 202, 'presc-008', '2020-03-27'),
(437, '2020-03-26', 202, 'presc-009', '2020-03-28'),
(437, '2020-03-26', 202, 'presc-010', '2020-03-31'),
(437, '2020-03-26', 202, 'presc-011', '2020-04-02'),
(438, '2020-10-29', 203, 'presc-012', '2020-10-30'),
(442, '2021-08-02', 203, 'presc-016', '2021-08-03'),
(439, '2020-06-03', 204, 'presc-013', '2020-06-04'),
(443, '2021-08-06', 204, 'presc-017', '2021-08-07'),
(444, '2021-02-16', 205, 'presc-018', '2021-02-17');

-- --------------------------------------------------------

--
-- Table structure for table `guardian`
--

CREATE TABLE `guardian` (
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `guardian_name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `guardian`
--

INSERT INTO `guardian` (`patient_id`, `date_of_admittance`, `guardian_name`, `phone_no`) VALUES
(432, '2020-02-20', 'John Hayes', '8328184689'),
(432, '2020-05-17', 'John Hayes', '8328184689'),
(432, '2021-02-17', 'Brandon Jenkins', '8397106232'),
(433, '2020-09-22', 'Lisa Mccarty', '9053139412'),
(434, '2020-03-27', 'David Garcia', '9503085429'),
(435, '2020-01-19', 'Stephanie Lawson', '9880301414'),
(436, '2020-05-24', 'Jesse Hanson', '8206570944'),
(437, '2020-03-26', 'Gregory Tapia', '8373253232'),
(438, '2020-10-29', 'Emily Ellis', '9700422784'),
(439, '2020-06-03', 'Paul Turner', '9368364355'),
(440, '2020-01-20', 'Sylvia Mendoza', '8370882970'),
(441, '2021-05-06', 'Katherine Sanford', '9510337450'),
(442, '2021-08-02', 'David Reed', '8640236179'),
(443, '2021-08-06', 'Makayla Gonzalez', '9800074622'),
(444, '2021-02-16', 'Samantha Jones', '8338442130');

-- --------------------------------------------------------

--
-- Table structure for table `nurse`
--

CREATE TABLE `nurse` (
  `emp_id` int NOT NULL,
  `position` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nurse`
--

INSERT INTO `nurse` (`emp_id`, `position`) VALUES
(215, 'Registered nurse'),
(216, 'Registered nurse'),
(217, 'Medical-surgical nurse'),
(218, 'Medical-surgical nurse'),
(219, 'ICU nurse'),
(220, 'ICU nurse'),
(221, 'Emergency room nurse');

-- --------------------------------------------------------

--
-- Table structure for table `office`
--

CREATE TABLE `office` (
  `office_no` int NOT NULL,
  `floor` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `office`
--

INSERT INTO `office` (`office_no`, `floor`) VALUES
(101, 1),
(102, 1),
(103, 1),
(104, 1),
(201, 2),
(202, 2),
(203, 2),
(204, 2),
(205, 2),
(206, 2);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `first_name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middle_name` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` date NOT NULL,
  `gender` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_discharge` date DEFAULT NULL,
  `house_no` int NOT NULL,
  `street` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin_code` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patient_id`, `date_of_admittance`, `first_name`, `middle_name`, `last_name`, `dob`, `gender`, `date_of_discharge`, `house_no`, `street`, `city`, `pin_code`) VALUES
(432, '2020-02-20', 'Andrew', 'F', 'Wilson', '1991-08-10', 'Male', '2020-03-21', 17, 'YWADMRF', 'Chennai', 362677),
(432, '2020-05-17', 'Andrew', 'F', 'Wilson', '1991-08-10', 'Male', '2020-05-22', 42, 'XNOMKWN', 'Motihari', 345016),
(432, '2021-02-17', 'Andrew', 'F', 'Wilson', '1991-08-10', 'Male', '2021-02-27', 23, 'HWQXDZQ', 'Rajkot', 349896),
(433, '2020-09-22', 'Alen', 'A', 'Carroll', '2021-02-17', 'Male', '2020-10-07', 36, 'FPRTGUF', 'Jammu', 343435),
(434, '2020-03-27', 'Lilianna', 'C', 'Ryan', '1975-07-15', 'Female', '2020-03-30', 46, 'MGXUBYI', 'Serampore', 323461),
(435, '2020-01-19', 'Blake', 'A', 'Carter', '1973-11-03', 'Female', '2020-01-29', 28, 'UQDYPYD', 'Aurangabad', 395833),
(436, '2020-05-24', 'Robert', 'G', 'Johnson', '1988-02-25', 'Female', '2020-06-06', 30, 'VTYOUTB', 'Solapur', 309173),
(437, '2020-03-26', 'Kate', 'T', 'Martin', '1980-06-12', 'Female', '2020-04-07', 42, 'TBTQCTF', 'Tadepalligudem', 366244),
(438, '2020-10-29', 'Eddy', 'H', 'Ross', '1971-05-29', 'Female', '2020-11-06', 10, 'MFQNMSW', 'Tiruchirappalli', 352522),
(439, '2020-06-03', 'Maddie', 'P', 'Fowler', '1976-07-27', 'Male', '2020-06-11', 12, 'VCKALRG', 'Satna', 349119),
(440, '2020-01-20', 'Maria', 'T', 'Montgomery', '1985-05-15', 'Male', '2020-02-04', 23, 'WFZUWAV', 'Mira-Bhayandar', 313578),
(441, '2021-05-06', 'Emma', 'S', 'Owens', '1977-12-02', 'Male', '2021-05-10', 48, 'VIQNFTY', 'Ratlam', 394117),
(442, '2021-08-02', 'Walter', 'B', 'Riley', '1977-05-02', 'Female', '2021-08-15', 14, 'FVDSHBO', 'Rae Bareli', 353515),
(443, '2021-08-06', 'David', 'I', 'Andrews', '1987-07-10', 'Female', '2021-08-21', 19, 'HCGOUIK', 'Asansol', 304955),
(444, '2021-02-16', 'Aston', 'D', 'Armstrong', '1985-12-27', 'Male', '2021-02-20', 43, 'VXCZNNA', 'Gandhinagar', 357454);

-- --------------------------------------------------------

--
-- Table structure for table `patient_phone_no`
--

CREATE TABLE `patient_phone_no` (
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `phone_no` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patient_phone_no`
--

INSERT INTO `patient_phone_no` (`patient_id`, `date_of_admittance`, `phone_no`) VALUES
(432, '2020-02-20', '9717683946'),
(432, '2020-05-17', '9717683946'),
(432, '2021-02-17', '9084337019'),
(433, '2020-09-22', '9723147714'),
(434, '2020-03-27', '9733508735'),
(435, '2020-01-19', '9104412474'),
(436, '2020-05-24', '8344240749'),
(437, '2020-03-26', '8813733203'),
(438, '2020-10-29', '9494389392'),
(439, '2020-06-03', '8277898994'),
(440, '2020-01-20', '9569031828'),
(441, '2021-05-06', '8866461865'),
(442, '2021-08-02', '9920117087'),
(443, '2021-08-06', '9922287837'),
(444, '2021-02-16', '9406281651');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `emp_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `room_no` int NOT NULL,
  `prescription` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `payment_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`emp_id`, `patient_id`, `date_of_admittance`, `room_no`, `prescription`, `date`, `payment_id`) VALUES
(224, 436, '2020-05-24', 104, 'presc-007', '2020-05-25', 100001),
(224, 437, '2020-03-26', 105, 'presc-009', '2020-03-28', 100002),
(226, 438, '2020-10-29', 201, 'presc-012', '2020-10-30', 100003),
(224, 441, '2021-05-06', 202, 'presc-015', '2021-05-07', 100004),
(225, 432, '2020-02-20', 205, 'presc-001', '2020-02-21', 100005),
(225, 432, '2020-05-17', 101, 'presc-003', '2020-05-18', 100006);

-- --------------------------------------------------------

--
-- Table structure for table `receptionist`
--

CREATE TABLE `receptionist` (
  `emp_id` int NOT NULL,
  `floor` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `receptionist`
--

INSERT INTO `receptionist` (`emp_id`, `floor`) VALUES
(227, 1),
(228, 2),
(229, 3);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_no` int NOT NULL,
  `price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_no`, `price`) VALUES
(101, 10000),
(102, 10000),
(103, 10000),
(104, 12000),
(105, 12000),
(106, 15000),
(107, 15000),
(201, 17500),
(202, 17500),
(203, 20000),
(204, 20000),
(205, 25000);

-- --------------------------------------------------------

--
-- Table structure for table `takes_care`
--

CREATE TABLE `takes_care` (
  `emp_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `takes_care`
--

INSERT INTO `takes_care` (`emp_id`, `patient_id`, `date_of_admittance`) VALUES
(215, 432, '2020-02-20'),
(216, 432, '2020-05-17'),
(221, 432, '2021-02-17'),
(217, 433, '2020-09-22'),
(218, 434, '2020-03-27'),
(215, 435, '2020-01-19'),
(216, 436, '2020-05-24'),
(217, 437, '2020-03-26'),
(218, 438, '2020-10-29'),
(215, 439, '2020-06-03'),
(216, 440, '2020-01-20'),
(217, 441, '2021-05-06'),
(218, 442, '2021-08-02'),
(221, 443, '2021-08-06'),
(221, 444, '2021-02-16');

-- --------------------------------------------------------

--
-- Table structure for table `treatment`
--

CREATE TABLE `treatment` (
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `date` date NOT NULL,
  `prescription` varchar(512) COLLATE utf8mb4_general_ci NOT NULL,
  `cost` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `treatment`
--

INSERT INTO `treatment` (`patient_id`, `date_of_admittance`, `date`, `prescription`, `cost`) VALUES
(432, '2020-02-20', '2020-02-21', 'presc-001', 44564),
(432, '2020-02-20', '2020-02-21', 'presc-002', 19700),
(432, '2020-05-17', '2020-05-18', 'presc-003', 72398),
(432, '2021-02-17', '2021-02-18', 'presc-019', 32426),
(433, '2020-09-22', '2020-09-23', 'presc-004', 10181),
(434, '2020-03-27', '2020-03-28', 'presc-005', 18057),
(435, '2020-01-19', '2020-01-20', 'presc-006', 36799),
(436, '2020-05-24', '2020-05-25', 'presc-007', 47332),
(437, '2020-03-26', '2020-03-27', 'presc-008', 22294),
(437, '2020-03-26', '2020-03-28', 'presc-009', 58450),
(437, '2020-03-26', '2020-03-31', 'presc-010', 58774),
(437, '2020-03-26', '2020-04-02', 'presc-011', 33043),
(438, '2020-10-29', '2020-10-30', 'presc-012', 22900),
(439, '2020-06-03', '2020-06-04', 'presc-013', 30304),
(440, '2020-01-20', '2020-01-21', 'presc-014', 38278),
(441, '2021-05-06', '2021-05-07', 'presc-015', 60078),
(442, '2021-08-02', '2021-08-03', 'presc-016', 49115),
(443, '2021-08-06', '2021-08-07', 'presc-017', 54716),
(444, '2021-02-16', '2021-02-17', 'presc-018', 34665);

-- --------------------------------------------------------

--
-- Table structure for table `treats`
--

CREATE TABLE `treats` (
  `patient_id` int NOT NULL,
  `date_of_admittance` date NOT NULL,
  `emp_id` int DEFAULT NULL,
  `disease` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `treats`
--

INSERT INTO `treats` (`patient_id`, `date_of_admittance`, `emp_id`, `disease`) VALUES
(432, '2020-02-20', 207, 'Acne vulgaris'),
(432, '2020-05-17', 207, 'Skin infections'),
(432, '2021-02-17', 207, 'Melasma'),
(433, '2020-09-22', 209, 'Preventive Care'),
(434, '2020-03-27', 210, 'Diagnosis and Treatment'),
(435, '2020-01-19', 212, 'Respiratory Infections'),
(436, '2020-05-24', 205, 'Typhoid'),
(437, '2020-03-26', 205, 'Fungal Diseases'),
(438, '2020-10-29', 206, 'Cardiovascular diseases'),
(439, '2020-06-03', 206, 'Respiratory diseases'),
(440, '2020-01-20', 208, 'Diabetes'),
(441, '2021-05-06', 209, 'Comprehensive Care'),
(442, '2021-08-02', 211, 'Epilepsy'),
(443, '2021-08-06', 213, 'Cardiovascular Disorders'),
(444, '2021-02-16', 214, 'Pulmonary Disorders');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allot`
--
ALTER TABLE `allot`
  ADD PRIMARY KEY (`equipment_id`),
  ADD KEY `room_no` (`room_no`);

--
-- Indexes for table `ambulance`
--
ALTER TABLE `ambulance`
  ADD PRIMARY KEY (`amb_id`),
  ADD UNIQUE KEY `amb_id` (`amb_id`),
  ADD UNIQUE KEY `vehicle_no` (`vehicle_no`);

--
-- Indexes for table `ambulance_services`
--
ALTER TABLE `ambulance_services`
  ADD PRIMARY KEY (`emp_id`,`patient_id`,`date_of_admittance`),
  ADD KEY `patient_id` (`patient_id`,`date_of_admittance`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`doctor_emp_id`,`rec_emp_id`,`patient_id`,`date_of_admittance`),
  ADD UNIQUE KEY `appointment_id` (`appointment_id`),
  ADD KEY `rec_emp_id` (`rec_emp_id`),
  ADD KEY `patient_id` (`patient_id`,`date_of_admittance`);

--
-- Indexes for table `cashier`
--
ALTER TABLE `cashier`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_name`),
  ADD UNIQUE KEY `dept_name` (`dept_name`);

--
-- Indexes for table `department_floor`
--
ALTER TABLE `department_floor`
  ADD PRIMARY KEY (`dept_name`,`floor`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `doc_dept`
--
ALTER TABLE `doc_dept`
  ADD PRIMARY KEY (`emp_id`),
  ADD KEY `dept_name` (`dept_name`);

--
-- Indexes for table `doc_offices`
--
ALTER TABLE `doc_offices`
  ADD PRIMARY KEY (`emp_id`),
  ADD KEY `office_no` (`office_no`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`),
  ADD UNIQUE KEY `emp_id` (`emp_id`);

--
-- Indexes for table `employee_phone_no`
--
ALTER TABLE `employee_phone_no`
  ADD PRIMARY KEY (`emp_id`,`phone_no`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`equipment_id`),
  ADD UNIQUE KEY `equipment_id` (`equipment_id`);

--
-- Indexes for table `gets`
--
ALTER TABLE `gets`
  ADD PRIMARY KEY (`patient_id`,`date_of_admittance`,`room_no`,`prescription`,`date`),
  ADD KEY `room_no` (`room_no`),
  ADD KEY `patient_id` (`patient_id`,`date_of_admittance`,`date`,`prescription`);

--
-- Indexes for table `guardian`
--
ALTER TABLE `guardian`
  ADD PRIMARY KEY (`patient_id`,`date_of_admittance`,`guardian_name`);

--
-- Indexes for table `nurse`
--
ALTER TABLE `nurse`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `office`
--
ALTER TABLE `office`
  ADD PRIMARY KEY (`office_no`),
  ADD UNIQUE KEY `office_no` (`office_no`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patient_id`,`date_of_admittance`);

--
-- Indexes for table `patient_phone_no`
--
ALTER TABLE `patient_phone_no`
  ADD PRIMARY KEY (`patient_id`,`date_of_admittance`,`phone_no`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`emp_id`,`patient_id`,`date_of_admittance`,`room_no`,`prescription`,`date`),
  ADD UNIQUE KEY `payment_id` (`payment_id`),
  ADD KEY `room_no` (`room_no`),
  ADD KEY `patient_id` (`patient_id`,`date_of_admittance`,`date`,`prescription`);

--
-- Indexes for table `receptionist`
--
ALTER TABLE `receptionist`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_no`),
  ADD UNIQUE KEY `room_no` (`room_no`);

--
-- Indexes for table `takes_care`
--
ALTER TABLE `takes_care`
  ADD PRIMARY KEY (`emp_id`,`patient_id`,`date_of_admittance`),
  ADD KEY `patient_id` (`patient_id`,`date_of_admittance`);

--
-- Indexes for table `treatment`
--
ALTER TABLE `treatment`
  ADD PRIMARY KEY (`patient_id`,`date_of_admittance`,`date`,`prescription`);

--
-- Indexes for table `treats`
--
ALTER TABLE `treats`
  ADD PRIMARY KEY (`patient_id`,`date_of_admittance`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `allot`
--
ALTER TABLE `allot`
  ADD CONSTRAINT `allot_ibfk_1` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`equipment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `allot_ibfk_2` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ambulance_services`
--
ALTER TABLE `ambulance_services`
  ADD CONSTRAINT `ambulance_services_ibfk_1` FOREIGN KEY (`patient_id`,`date_of_admittance`) REFERENCES `patient` (`patient_id`, `date_of_admittance`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`doctor_emp_id`) REFERENCES `doctor` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`rec_emp_id`) REFERENCES `receptionist` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_ibfk_3` FOREIGN KEY (`patient_id`,`date_of_admittance`) REFERENCES `patient` (`patient_id`, `date_of_admittance`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cashier`
--
ALTER TABLE `cashier`
  ADD CONSTRAINT `cashier_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `department_floor`
--
ALTER TABLE `department_floor`
  ADD CONSTRAINT `department_floor_ibfk_1` FOREIGN KEY (`dept_name`) REFERENCES `department` (`dept_name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doc_dept`
--
ALTER TABLE `doc_dept`
  ADD CONSTRAINT `doc_dept_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `doctor` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doc_dept_ibfk_2` FOREIGN KEY (`dept_name`) REFERENCES `department` (`dept_name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doc_offices`
--
ALTER TABLE `doc_offices`
  ADD CONSTRAINT `doc_offices_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `doctor` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doc_offices_ibfk_2` FOREIGN KEY (`office_no`) REFERENCES `office` (`office_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `driver`
--
ALTER TABLE `driver`
  ADD CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employee_phone_no`
--
ALTER TABLE `employee_phone_no`
  ADD CONSTRAINT `employee_phone_no_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `guardian`
--
ALTER TABLE `guardian`
  ADD CONSTRAINT `guardian_ibfk_1` FOREIGN KEY (`patient_id`,`date_of_admittance`) REFERENCES `patient` (`patient_id`, `date_of_admittance`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
