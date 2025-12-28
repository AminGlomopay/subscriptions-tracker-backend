import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateInvoiceSchema = z.object({
  invoiceNumber: z.string().min(1, 'Invoice number is required').max(100),
  invoiceDate: z.string().datetime('Invalid invoice date format'),
  invoiceAmount: z
    .number()
    .int('Invoice amount must be an integer (in cents)')
    .min(0, 'Invoice amount cannot be negative'),
  taxAmount: z
    .number()
    .int('Tax amount must be an integer (in cents)')
    .min(0, 'Tax amount cannot be negative'),
  totalAmount: z
    .number()
    .int('Total amount must be an integer (in cents)')
    .min(0, 'Total amount cannot be negative'),
  invoiceDueDate: z.string().datetime('Invalid due date format'),
  vendorId: z.number().int().positive('Vendor ID is required'),
  costHeadId: z.number().int().positive('Cost head ID is required'),
  departmentId: z.number().int().positive('Department ID is required'),
  companyId: z.number().int().positive('Company ID is required'),
});

export class CreateInvoiceDto extends createZodDto(CreateInvoiceSchema) {}
