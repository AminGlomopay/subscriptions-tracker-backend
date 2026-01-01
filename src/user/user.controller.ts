import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '@prisma/client';

@Controller({
  version: '1',
  path: 'users',
})
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getProfile(@CurrentUser() user: User) {
    return user;
  }
}
