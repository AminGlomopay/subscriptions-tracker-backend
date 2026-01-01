import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(email: string, password: string) {
    const user = await this.userService.findByEmailSafe(email);
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid email or password');

    return user;
  }

  async generateTokens(user: User) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async register(email: string, password: string, name: string) {
    const existingUser = await this.userService.findByEmailSafe(email);
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.userService.create({
      email,
      password: hashedPassword,
      name,
    });
  }
}
