import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VendorTypeEnum = z.enum([
  'TECHNICAL_SUBSCRIPTION',
  'NORMAL_SUBSCRIPTION',
  'ONE_TIME',
  'OTHERS',
]);

const VendorStatusEnum = z.enum(['ACTIVE', 'INACTIVE']);

const CreateVendorSchema = z.object({
  name: z.string().min(1, 'Vendor name is required').max(200),
  country: z.string().min(1, 'Country is required').max(100),
  taxId: z.string().min(1, 'Tax ID is required').max(100),
  isTaxClaimable: z.boolean().optional().default(false),
  vendorType: VendorTypeEnum,
  status: VendorStatusEnum.optional().default('ACTIVE'),
  isScrutVerified: z.boolean().optional().default(false),
  isAgreementSigned: z.boolean().optional().default(false),
  companyIds: z
    .array(z.number())
    .min(1, 'At least one company must be associated with the vendor'),
});

export class CreateVendorDto extends createZodDto(CreateVendorSchema) {}
