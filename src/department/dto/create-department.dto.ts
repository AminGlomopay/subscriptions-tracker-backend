import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateDepartmentSchema = z.object({
  name: z.string().min(1, 'Department name is required').max(100),
});

export class CreateDepartmentDto extends createZodDto(CreateDepartmentSchema) {}
