const databaseConnection = require('../../database/connection');

class GetAllStudentsRepository {
  constructor () {
    this.databaseConnection = databaseConnection;
  }

  async execute() {
    const students = await this.databaseConnection();
    
    return students;
  }
}

module.exports = GetAllStudentsRepository;