class AppError {
  constructor(message, statusCode = 400, error = '') {
    this.message = message;
    this.error = error;
    this.statusCode = statusCode;
  }
}

export default AppError;
