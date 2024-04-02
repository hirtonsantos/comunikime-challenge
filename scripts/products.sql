set schema 'public';
SET client_encoding = 'UTF8';
SET search_path = public, pg_catalog;

-- Exemplo 1
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Smartphone XYZ', 599.99, 'Um smartphone avançado com câmera de alta resolução', 100, 'suporte@xyz.com', 'APPROVED', 'Eletrônicos', 5);

-- Exemplo 2
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Fone de Ouvido Bluetooth ABC', 49.99, 'Fone de ouvido sem fio com cancelamento de ruído', 200, 'suporte@abc.com', 'PENDING', 'Acessórios', 6);

-- Exemplo 3
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Livro "Aventuras na Floresta"', 19.99, 'Um livro de aventura para crianças', 50, 'suporte@livraria.com', 'APPROVED', 'Livros', 7);

-- Exemplo 4
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Cadeira Ergonômica XYZ', 199.99, 'Uma cadeira confortável para longas horas de trabalho', 30, 'suporte@mobilia.com', 'PENDING', 'Móveis', 8);

-- Exemplo 5
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Relógio Inteligente ABC', 129.99, 'Um relógio inteligente com monitor de atividades físicas', 80, 'suporte@tecnologia.com', 'APPROVED', 'Eletrônicos', 9);

-- Exemplo 6
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Jogo de Panelas XYZ', 79.99, 'Um conjunto de panelas antiaderentes', 100, 'suporte@cozinha.com', 'PENDING', 'Utensílios Domésticos', 10);

-- Exemplo 7
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Câmera Fotográfica ABC', 299.99, 'Uma câmera DSLR para fotografia profissional', 20, 'suporte@fotografia.com', 'APPROVED', 'Eletrônicos', 11);

-- Exemplo 8
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Mochila Escolar XYZ', 39.99, 'Uma mochila resistente para estudantes', 150, 'suporte@escola.com', 'PENDING', 'Acessórios', 12);

-- Exemplo 9
INSERT INTO tbl_products ("name", price, description, quantity, supportMailAddress, status, category, owner_id)
VALUES ('Console de Videogame ABC', 349.99, 'Um console de videogame de última geração', 50, 'suporte@gamer.com', 'APPROVED', 'Eletrônicos', 13);
