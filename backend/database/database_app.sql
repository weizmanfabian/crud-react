-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-04-2022 a las 00:40:34
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` varchar(150) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 'título editado 4', 'content new corregido4', '0000-00-00', '2022-04-22'),
(3, 'Título 3', 'Content 3', '0000-00-00', '0000-00-00'),
(4, 'título editado', 'content new corregido', '0000-00-00', '2022-04-08'),
(6, 'título editado', 'content new corregido', '2022-04-08', '2022-04-08'),
(7, 'título updated5', 'content updated5', '2022-04-11', '2022-04-22'),
(10, 'new1', 'new1', '2022-04-22', '2022-04-22'),
(14, 'new', 'new', '2022-04-22', '2022-04-22'),
(16, 'fabi', 'Content 1 act', '2022-04-22', '2022-04-22'),
(17, '45', '456', '2022-04-22', '2022-04-22'),
(18, '789', '789', '2022-04-22', '2022-04-22'),
(19, '123', '123', '2022-04-22', '2022-04-22'),
(20, '321', '321', '2022-04-22', '2022-04-22'),
(22, '789', '789', '2022-04-22', '2022-04-22'),
(23, '654', '654', '2022-04-22', '2022-04-22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
