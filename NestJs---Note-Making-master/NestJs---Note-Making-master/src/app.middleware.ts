import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private jwtAuthService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

    if (token) {
      try {
        const payload = this.jwtAuthService.verify(token);
        req['user'] = payload; // Attach the user object to the request
      } catch (error) {
        res.status(400).json({
          message: 'User not authorized',
        });
        return;
        // Handle token verification error
      }
      next();
    }
  }
}
