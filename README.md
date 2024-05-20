# transfeera-tech-challange

### workflow do projeto
    README.md
    _backend
    └── controllers
    └── middlawares
    └── migrations
    └── models
    └── routes
    └── services
    └── test
    └── server.js

# Requisitos
> Nodejs 20.x

> npm 

> Docker & Docker CLI

# Como rodar o projeto
    
- Clonar o projeto do git 

```ssh  
    $ git clone https://github.com/silascastro/transfeera-tech-challange.git
```

- entrar no projeto e rodar o docker compose para iniciar o banco de dados 

>  obs se você não tiver o docker compose instale na sua máquina  https://docs.docker.com/compose/install/

```bash  
    $ cd .\transfeera-tech-challange\ &&  docker compose up --build -d
```

- entrar no container criado e criar um novo banco de dados 

```bash
    $ docker exec -it db-transfeera bash
```
 - conecte no banco de dados usando a senha que esta em **backend/config/config.json** na configuração **development**
```bash
    $ mysql -u root -p
```

 - após conectar crie um novo banco chamado **transfeera**

 ```mysql
    create database transfeera;
 ```

 pronto agora já temos o nosso ambiente de desenvolvimento pronto.


 ## criando as migrations e rodando o projeto 

  - para rodar o backend basta entrar no diretório **backend** e instalar os node modules

    ```bash 
        $ cd backend
    ```

    ```bash 
        $ npm install
    ```

 - criando as migrations 
    - entre no diretório **backend**
         ```bash 
            $ cd backend
        ```

        ```bash
            $ npm run migrations
        ```

- se ocorreu tudo certo com as migrations, então rodamos o projeto
    ```bash 
    $ npm run start
    ```


