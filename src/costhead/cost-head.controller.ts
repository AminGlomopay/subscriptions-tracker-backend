import { Body, Controller, Get, Post } from '@nestjs/common';
import { CostHeadService } from './cost-head.service';
import { CreateCostHeadDto } from './dto/create-cost-head.dto';

@Controller({
  version: '1',
  path: 'cost-heads',
})
export class CostHeadController {
  constructor(private readonly costHeadService: CostHeadService) {}

  @Post()
  async createCostHead(@Body() createCostHeadDto: CreateCostHeadDto) {
    return this.costHeadService.create(createCostHeadDto);
  }

  @Get()
  async getCostHeads() {
    return this.costHeadService.findAll();
  }
}
