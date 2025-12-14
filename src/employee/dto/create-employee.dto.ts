import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateEmployeeSchema = z.object({
  name: z.string().min(1, 'Employee name is required').max(100),
  email: z.string().email('Invalid email address'),
  departmentId: z
    .number()
    .int()
    .positive('Department ID must be a positive integer'),
});

export class CreateEmployeeDto extends createZodDto(CreateEmployeeSchema) {}
