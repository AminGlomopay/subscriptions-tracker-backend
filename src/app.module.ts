import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { CostHeadModule } from './costhead/cost-head.module';
import { CompanyModule } from './company/company.module';
import { VendorModule } from './vendor/vendor.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    DepartmentModule,
    EmployeeModule,
    CostHeadModule,
    CompanyModule,
    VendorModule,
    InvoiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
