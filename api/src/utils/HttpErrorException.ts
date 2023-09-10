import { StatusCode } from "@utils";

export class HttpErrorException {
  message: string;
  description?: string;
  statusCode: StatusCode = StatusCode.INTERNAL_SERVER_ERROR;
  
  constructor(message: string = HttpErrorException.name, description?: string) {
    this.message = message;
    this.description = description;
  }

  setStatusCode(status: number = 500): HttpErrorException {
    this.statusCode = status;
    return this;
  }
}

export class BadRequestException extends HttpErrorException {
  constructor(message: string, description?: string) {
    super(message, description);
    this.statusCode = StatusCode.BAD_REQUEST;
  }
}
