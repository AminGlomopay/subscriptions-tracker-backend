import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVendorDto } from './dto/create-vendor.dto';

@Injectable()
export class VendorService {
  constructor(private prisma: PrismaService) {}

  async create(createVendorDto: CreateVendorDto) {
    const { companyIds, ...vendorData } = createVendorDto;

    return this.prisma.vendor.create({
      data: {
        ...vendorData,
        companies: {
          create: companyIds.map((companyId) => ({
            company: {
              connect: { id: companyId },
            },
          })),
        },
      },
      include: {
        companies: {
          include: {
            company: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.vendor.findMany({
      include: {
        companies: {
          include: {
            company: true,
          },
        },
      },
    });
  }
}
