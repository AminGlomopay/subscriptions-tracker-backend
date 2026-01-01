import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: { email },
    });
  }

  async findByEmailSafe(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: number) {
    return this.prisma.user.findUniqueOrThrow({
      where: { id },
    });
  }

  async findByIdSafe(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: { email: string; password: string; name: string }) {
    return this.prisma.user.create({
      data,
    });
  }
}
