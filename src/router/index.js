const GetAllStudentsFactory = require('../factories/get-all-students');
const getAllStudentsController = GetAllStudentsFactory.generateInstance();

const DEFAULT_HEADER = {
  'Content-Type': 'application/json',
};

const routes = {
  "/students:get": function (request, response) {
    return getAllStudentsController.handle(request, response);
  },
  "notFound": () => {
    response.writeHead(404, DEFAULT_HEADER);
    response.write(JSON.stringify({ message: 'Página não encontrada.' }));

    return response.end();
  },
};

const httpHandler = (request, response) => {
  const { url, method } = request;
  const key = `${url}:${method.toLowerCase()}`;
  const chosenRoute = routes[key] || routes.notFound;

  response.writeHead(200, DEFAULT_HEADER);

  return chosenRoute(request, response);
};

module.exports = { routes, httpHandler, DEFAULT_HEADER };