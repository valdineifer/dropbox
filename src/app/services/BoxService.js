const { Box } = require('../models')
const Response = require('../../constants/response')

class BoxService {
  constructor () {
    this.box = Box
  }

  async store (body) {
    const box = await this.check(body.title)

    if (!box) {
      return {
        box: await this.box.create({ ...body }),
        ...Response.boxCreated
      }
    }

    return Response.boxFound
  }

  async update (body) {
    const box = await this.box.findByPk(body.id)

    if (!box) {
      return Response.boxNotFound
    }

    const boxUpdated = await box.update({ ...body })

    return {
      box: boxUpdated,
      ...Response.boxOk
    }
  }

  check (title) {
    return this.box.findOne({ where: { title } })
  }

  async get (id) {
    const box = await this.box.findByPk(id)

    if (!box) {
      return Response.boxNotFound
    }

    return {
      box,
      ...Response.boxOk
    }
  }

  async destroy (id) {
    const box = await this.box.findByPk(id)

    if (!box) {
      return Response.boxNotFound
    }

    await box.destroy()

    return Response.boxDeleted
  }
}

module.exports = new BoxService()
