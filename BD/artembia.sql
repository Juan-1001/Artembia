-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-02-2021 a las 16:42:14
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `artembia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--CREATE DATABASE artembia;

CREATE TABLE `usuario` (
  `doc_usuario` int(20) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `num_contac` int(20) NOT NULL,
  `tip_contenido` varchar(200) NOT NULL,
  `clave` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`doc_usuario`, `nombres`, `apellidos`, `email`, `num_contac`, `tip_contenido`, `clave`) VALUES
(122, 'sebas', 'mahe', 'jhonc6816@gmail.com', 0, 'ilustracion', '789'),
(746, 'sebas', 'yorke', 'sebastian.mahechika@hotmail.com', 2147483647, 'ilustracionmu', '09877'),
(46362, 'sebas', 'mahe', 'jhonc68565106@gmail.com', 75859854, 'ilustracion', '4684'),
(122989, 'sebas', 'mahe', 'jhonc68106@gmail.com', 0, 'ilustracion', '0976'),
(1029374, 'Monacho', 'ilustra', 'monacho@hotmail.com', 123456, 'ilustracion', '6690'),
(7895779, 'sebadf', 'mahefgv', 'sebastian.mahecha@hotmail.com', 0, 'ilustracionmu', '1425'),
(54467547, 'thom', 'yorke', 'yorke@gamil,cin', 0, 'musica', '669');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`doc_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `doc_usuario` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54467548;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
