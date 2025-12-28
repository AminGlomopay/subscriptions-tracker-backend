import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateCompanySchema = z.object({
  name: z.string().min(1, 'Company name is required').max(100),
});

export class CreateCompanyDto extends createZodDto(CreateCompanySchema) {}
