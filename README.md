<table>
  <tr>
    <td style="background: 'white'">
      <img src="https://github.com/luiizsilverio/adonis/blob/main/app/images/adonis-logo.jpg" />
    </td>
    <td><h1>ADONIS API</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre a Aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
API desenvolvida em __AdonisJS__ que implementa um CRUD com banco de dados __SQLite__.<br />
Permite a inclusão de eventos (moments) e comentários, alteração, exclusão e consulta.<br />
Desenvolvido durante o curso [API RESTful com AdonisJS](https://www.youtube.com/watch?v=y8XfJJYhXPE), do prof. Matheus Battisti.<br />

### Rotas da aplicação

| Método | Caminho da Rota | Handler | Nome |
|---|---|---|---|
| GET | /api/moments | MomentsController.index | |
| POST | /api/moments | MomentsController.store | moments.store |
| GET | /api/moments/:id | MomentsController.show | moments.show |
| PATCH | /api/moments/:id | MomentsController.update | moments.update |
| DELETE | /api/moments/:id | MomentsController.destroy | moments.destroy |
| POST | /api/moments/:momentId/comments | CommentsController.store | |


## :hammer_and_wrench: Tecnologias
* __AdonisJS__
* __SQLite__

## :car: Iniciando a aplicação
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/adonis.git

# Execute yarn para instalar as dependências (ou npm install)
$ yarn

# Para iniciar a aplicação
$ yarn dev

# Abra http://localhost:3333 no navegador
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
