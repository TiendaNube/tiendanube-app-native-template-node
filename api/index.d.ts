declare namespace Express {
  export interface Request {
    user: {
      user_id: number;
      access_token: string;
      id: number;
    };
  }
}
