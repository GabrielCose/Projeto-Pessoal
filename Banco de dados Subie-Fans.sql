-- Cria o banco de dados
create database subaru;

-- Usar o banco de dados
USE subaru;

-- Tabela de usuários
CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(30) NOT NULL
);
-- Tabela de comentários
CREATE TABLE comentarios (
    idComentario INT AUTO_INCREMENT PRIMARY KEY,
    descricao TEXT NOT NULL,
    fkUsuario INT NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);
-- Tabela score
CREATE TABLE score(
idScore INT AUTO_INCREMENT PRIMARY KEY,
pontuacao varchar (3),
fkUsuario INT NOT NULL,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from comentarios;
select * from usuario;
select * from score; 
SELECT 
	u.nome AS Nome,
	c.descricao AS Oficina
FROM comentarios AS c
JOIN usuario AS u
ON c.fkUsuario = u.idUsuario;


