-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 13 mai 2020 à 18:25
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `angularloopers`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Titre` varchar(500) DEFAULT NULL,
  `Contenu` varchar(5000) DEFAULT NULL,
  `UtilisateurID` int(12) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `UtilisateurID` (`UtilisateurID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`ID`, `Titre`, `Contenu`, `UtilisateurID`) VALUES
(1, 'Coronavirus en direct : selon une nouvelle estimation, 2,8 millions de Français ont été infectés par le Covid-19', 'L’épidémie en France\r\n\r\nLe Covid-19 a tué 27 704 personnes selon le dernier bilan des autorités de santé, communiqué mercredi soir. La pression dans les services de réanimation continue de s’alléger, mais 21 071 personnes restent hospitalisées pour une infection au coronavirus, dont 2 428 cas graves en réanimation.\r\n\r\nEnviron un million d’élèves ont repris mardi le chemin de l’école. Pour les enfants, l’ambiance était étrange, entre les nouvelles règles à appliquer et la joie de retrouver les copains sans pouvoir les approcher.\r\n\r\nPlus de 60 plaintes déposées contre des membres du gouvernement. Elles visent le premier ministre, les deux ministres de la santé qui se sont succédé, ainsi que ceux de la justice, du travail et de l’intérieur et dénoncent leur gestion de la crise liée au coronavirus.\r\nDans son rapport, Jean Castex, chargé par le premier ministre de coordonner la stratégie du déconfinement, appelle toutefois à se tenir prêt à un éventuel effet boomerang : « Un reconfinement en urgence doit être anticipé », prévient-il.\r\n\r\nLe Conseil constitutionnel a validé lundi la loi prorogeant l’état d’urgence sanitaire, mais avec « deux censures partielles » : la première pour limiter le nombre de personnes pouvant accéder aux données sur les malades à des fins de traçage ; la seconde pour qu’un juge des libertés puisse effectuer un « contrôle » si le malade ne peut pas sortir plus de douze heures de son lieu d’isolement.', 1),
(2, 'La résilience des énergies renouvelables à l’épreuve du Covid-19', 'Un baril de pétrole dont le prix a chuté de 70 % entre fin janvier et avril ; une consommation énergétique mondiale qui pourrait diminuer de 6 % cette année – du jamais-vu depuis soixante-dix ans ; la demande mondiale de charbon en baisse de 8 % au premier trimestre 2020 par rapport au premier trimestre 2019… La mise à l’arrêt des économies, et notamment des transports, en raison de la pandémie de Covid-19, a largement ébranlé le secteur des énergies. A l’exception, au moins en partie, de celui des renouvelables.\r\n\r\n« Au milieu de crises sanitaire et économique sans précédent, la chute de la demande pour presque tous les principaux combustibles est stupéfiante, déclarait, le 30 avril, Fatih Birol, le directeur exécutif de l’Agence internationale de l’énergie (AIE). Seules les énergies renouvelables se maintiennent. »', 1),
(3, 'Qu\'est ce que \"Angular\" ?', 'Angular (communément appelé \"Angular 2+\" ou \"Angular v2 et plus\") est un cadriciel (framework) côté client, open source, basé sur TypeScript, et co-dirigé par l\'équipe du projet « Angular » à Google et par une communauté de particuliers et de sociétés. Angular est une réécriture complète de AngularJS, cadriciel construit par la même équipe.\r\n\r\nInformations\r\n\r\nDéveloppé par	\r\nGoogle et la communauté Angular.\r\n\r\nPremière version	\r\nseptembre 2016\r\n\r\nDernière version	\r\n9.1.6 (8 mai 2020)\r\n\r\nDépôt	\r\ngithub.com/angular/angular\r\n\r\nAssurance qualité	\r\nIntégration continue\r\n\r\nÉcrit en	\r\nTypeScript\r\n\r\nSystème d\'exploitation	\r\nMultiplateforme\r\n\r\nType	\r\nFramework JavaScript\r\n\r\nLicence	Licence MIT\r\n\r\nSite web	\r\nangular.io', NULL),
(4, 'Article Base de données', 'Une base de données (en anglais database), permet de stocker et de retrouver l\'intégralité de données brutes ou d\'informations en rapport avec un thème ou une activité ; celles-ci peuvent être de natures différentes et plus ou moins reliées entre elles. En effet, leurs données peuvent y être très structurées (base de données relationnelles par exemple), ou bien hébergées sous la forme de données brutes déstructurées (base de données NoSQL Redis par exemple) qui, dans ce cas, seront ensuite parcourues de manière organisée au moment de la lecture via des moteurs spécifiques (comme Elasticsearch). Une base de données peut être localisée dans un même lieu et sur un même support informatisé, ou réparties sur plusieurs machines à plusieurs endroits (base de données NoSQL par exemple).\r\n\r\nLa base de données est au centre des dispositifs informatiques de collecte, mise en forme, stockage et utilisation d\'informations. Le dispositif comporte un système de gestion de base de données (abréviation : SGBD) : un logiciel moteur qui manipule la base de données et dirige l\'accès à son contenu. De tels dispositifs comportent également des logiciels applicatifs, et un ensemble de règles relatives à l\'accès et l\'utilisation des informations2.\r\n\r\nLa manipulation de données est une des utilisations les plus courantes des ordinateurs. Les bases de données sont par exemple utilisées dans les secteurs de la finance, des assurances, des écoles, de l\'épidémiologie, de l\'administration publique (notamment les statistiques) et des médias.\r\n\r\nLorsque plusieurs objets nommés « bases de données » sont constitués sous forme de collection, on parle alors d\'une banque de données.\r\n\r\n', 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `Role` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`ID`, `nom`, `prenom`, `email`, `password`, `Role`) VALUES
(1, 'Martin', 'Didier', 'didier.martin@angular.org', 'c28063a11fc1a04ae9b19d5ab31c32028be54c56219897ea3667fe4c2454ff87', 'Admin'),
(2, 'Obispo', 'Jean-Luc', 'jean-luc.obispo@angular.org', 'd0ea0c0cfd5d1edfec8cdad498481ad56947f786d27aa2fa73e8d75e44542407', 'User');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
