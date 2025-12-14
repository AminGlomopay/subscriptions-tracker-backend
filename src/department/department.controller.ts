import { Body, Controller, Get, Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Controller({
  path: 'departments',
  version: '1',
})
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async createDepartment(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  async getDepartments() {
    return this.departmentService.findAll();
  }
}
