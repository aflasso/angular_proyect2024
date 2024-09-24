CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `passwor` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fecha_creacion` date DEFAULT curdate(),
  `activo` tinyint(4) DEFAULT 1,
  `rol` varchar(50) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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

CREATE TABLE objetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT
);

CREATE TABLE `usuario_objeto` (
  `usuario_id` int(11) NOT NULL,
  `objeto_id` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT 1,
  PRIMARY KEY (`usuario_id`,`objeto_id`),
  KEY `objeto_id` (`objeto_id`),
  CONSTRAINT `usuario_objeto_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `usuario_objeto_ibfk_2` FOREIGN KEY (`objeto_id`) REFERENCES `objetos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

