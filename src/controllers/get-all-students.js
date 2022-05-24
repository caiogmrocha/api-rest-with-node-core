const Student = require('../entities/student');
const DEFAULT_HEADER = require('../router/index');

class GetAllStudentsController {
  constructor (getAllStudentsService) {
    this.getAllStudentsService = getAllStudentsService;
  }

  async handle(request, response) {
    const students = await this.getAllStudentsService();

    response.writeHead(200, DEFAULT_HEADER);
    response.write(JSON.stringify(students));

    return response.end();
  }
}

module.exports = GetAllStudentsController;