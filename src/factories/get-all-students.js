const GetAllStudentsRepository = require('../repositories/get-all-students');
const GetAllStudentsService = require('../services/get-all-students');
const GetAllStudentsController = require('../controllers/get-all-students');

function generateInstance() {
  const getAllStudentsRepository = new GetAllStudentsRepository();
  const getAllStudentsService = new GetAllStudentsService(getAllStudentsRepository);
  const getAllStudentsController = new GetAllStudentsController(getAllStudentsService);

  return getAllStudentsController;
}

module.exports = { generateInstance };