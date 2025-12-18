import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCostHeadDto } from './dto/create-cost-head.dto';

@Injectable()
export class CostHeadService {
  constructor(private prisma: PrismaService) {}

  create(createCostHeadDto: CreateCostHeadDto) {
    return this.prisma.costHead.create({
      data: {
        name: createCostHeadDto.name,
      },
    });
  }

  findAll() {
    return this.prisma.costHead.findMany();
  }
}
