import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Moment from 'App/Models/Moment'

export default class MomentsController {

    // inserção de dados (store ou outro nome)
    public async store({ request, response }: HttpContextContract) {
        const body = request.body()

        // insere os dados no banco
        const moment = await Moment.create(body)

        response.status(201)
        return {
            message: "Momento criado com sucesso",
            data: moment
        }
    }

}
