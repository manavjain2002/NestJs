import { Controller } from '@nestjs/common';
import { UserService } from 'src/users/users.services';

@Controller()
export class ProductController {
  constructor(private readonly userService: UserService) {
    console.log(
      '🚀 ~ file: products.services.ts:6 ~ ProductService ~ constructor ~ userService:',
      userService,
    );
  }
}
