import { Body, Controller, Get, Post } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';

@Controller({
  version: '1',
  path: 'vendors',
})
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post()
  async createVendor(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorService.create(createVendorDto);
  }

  @Get()
  async getVendors() {
    return this.vendorService.findAll();
  }
}
