const GetAllStudentsRepository = require('../repositories/get-all-students');
const GetAllStudentsService = require('../services/get-all-students');

function getInstance() {
  const getAllStudentsRepository = new GetAllStudentsRepository();
  const getAllStudentsService = new GetAllStudentsService(getAllStudentsRepository);
  const getAllStudentsController = new GetAllStudentsController(getAllStudentsService);
}

module.exports = getInstance;