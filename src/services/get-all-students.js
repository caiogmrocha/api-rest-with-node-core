class GetAllStudentsService {
  constructor (getAllStudentsRepository) {
    this.getAllStudentsRepository = getAllStudentsRepository;
  }

  async execute() {
    return await this.getAllStudentsRepository.execute();
  }
}

module.exports = GetAllStudentsService;