import { Module } from '@nestjs/common';
import { CostHeadController } from './cost-head.controller';
import { CostHeadService } from './cost-head.service';

@Module({
  controllers: [CostHeadController],
  providers: [CostHeadService],
})
export class CostHeadModule {}
