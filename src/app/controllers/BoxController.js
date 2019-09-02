const BoxService = require('../services/BoxService');
const ErrorService = require('../services/ErrorService');
const HTTP = require('../../constants/http');

class BoxController {
  async store(req, res, next) {
    try {
      const { body } = req;
      const response = await BoxService.store(body);

      if (response.status !== HTTP.CREATED) {
        const e = new ErrorService(req, response);
        return next(e.get());
      }

      return res
        .status(HTTP.CREATED)
        .json({ user: response.user, message: response.describe });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new BoxController();
