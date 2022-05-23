class Student {
  constructor ({ id, ...props }) {
    Object.assign(this, props);

    if (!id) {
      this.id = Date.now() * Math.floor(Math.random() * 100);
    } else {
       this.id = id;
    }
  }

  isValid() {
    const requiredFields = [ 'id', 'name', 'email', 'country', 'course' ];
    const errorMessages = [];

    for (const field of requiredFields) {
      if (!this[field]) {
        errorMessages.push(`O campo "${field}" é obrigatório`);
      }
    }
    
    return errorMessages;
  }
}

module.exports = Student;