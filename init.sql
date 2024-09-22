CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `passwor` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fecha_creacion` date DEFAULT curdate(),
  `activo` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nivel` int(11) NOT NULL DEFAULT 1,
  `entrenador_id` int(11) DEFAULT NULL,
  `fecha_captura` date DEFAULT curdate(),
  `activo` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `fk_entrenador` (`entrenador_id`),
  CONSTRAINT `pokemon_ibfk_1` FOREIGN KEY (`entrenador_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;