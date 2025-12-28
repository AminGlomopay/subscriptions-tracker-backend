import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    return this.prisma.invoice.create({
      data: {
        invoiceNumber: createInvoiceDto.invoiceNumber,
        invoiceDate: new Date(createInvoiceDto.invoiceDate),
        invoiceAmount: createInvoiceDto.invoiceAmount,
        taxAmount: createInvoiceDto.taxAmount,
        totalAmount: createInvoiceDto.totalAmount,
        invoiceDueDate: new Date(createInvoiceDto.invoiceDueDate),
        vendorId: createInvoiceDto.vendorId,
        costHeadId: createInvoiceDto.costHeadId,
        departmentId: createInvoiceDto.departmentId,
        companyId: createInvoiceDto.companyId,
      },
    });
  }

  findAll() {
    return this.prisma.invoice.findMany();
  }
}
