import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as crypto from 'crypto';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const cipher = crypto.createCipheriv(
          'aes-256-cbc',
          'qwertyuiopasdfghjklzxcvbnmlkjhgf',
          'qwertyuiopasdfgh',
        );
        let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'base64');
        encrypted += cipher.final('base64');
        console.log('Response has sent : ', encrypted);
        return {
          encrypted: encrypted,
        };
      }),
    );
  }
}
