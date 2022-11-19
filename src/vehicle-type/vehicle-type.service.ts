import { Injectable } from '@nestjs/common';

@Injectable()
export class VehicleTypeService {
  create(createVehicleTypeDto: any) {
    return 'This action adds a new vehicleType';
  }

  findAll() {
    return `This action returns all vehicleType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleType`;
  }

  update(id: number, updateVehicleTypeDto: any) {
    return `This action updates a #${id} vehicleType`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleType`;
  }
}
