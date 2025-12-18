import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateCostHeadSchema = z.object({
  name: z.string().min(1, 'Cost head name is required').max(100),
});

export class CreateCostHeadDto extends createZodDto(CreateCostHeadSchema) {}
