const databaseConnection = require('../../database/connection');
const path = require('path');

class GetAllStudentsRepository {
  constructor (databaseConnection) {
    this.databaseConnection = databaseConnection;
  }

  async execute() {
    const students = await this.databaseConnection();
    
    return students;
  }
}

module.exports = GetAllStudentsRepository;