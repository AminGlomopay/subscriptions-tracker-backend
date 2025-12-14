import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data: {
        name: createEmployeeDto.name,
        email: createEmployeeDto.email,
        departmentId: createEmployeeDto.departmentId,
      },
      include: {
        department: true,
      },
    });
  }

  findAll() {
    return this.prisma.employee.findMany();
  }
}
