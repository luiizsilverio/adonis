import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import { v4 as uuid } from 'uuid'

import Moment from 'App/Models/Moment'

export default class MomentsController {
    private validationOptions = {
        types: ['image'],
        size: '2mb'
    }

    // POST: /api/moments
    // inserção de dados (store ou outro nome)
    public async store({ request, response }: HttpContextContract) {
        // o body não é JSON, é Multipart-data
        const body = request.body()

        const image = request.file('image', this.validationOptions)

        // upload de imagens
        if (image) {
            const imageName = `${uuid()}.${image.extname}`

            await image.move(Application.tmpPath('uploads'), {
                name: imageName
            })

            body.image = imageName
        }

        // insere os dados no banco
        const moment = await Moment.create(body)

        response.status(201)
        return {
            message: "Momento criado com sucesso",
            data: moment
        }
    }

    // GET: /api/moments
    public async index() {
      const moments = await Moment.all()

      return {
        data: moments
      }
    }

    // GET: /api/moments/:id
    public async show({params}: HttpContextContract) {
      const moment = await Moment.findOrFail(params.id)

      return {
        data: moment
      }
    }

    // DELETE: /api/moments/:id
    public async destroy({params}: HttpContextContract) {
      const moment = await Moment.findOrFail(params.id)

      await moment.delete()

      return {
        message: "Excluído com sucesso",
        data: moment
      }
    }
}
