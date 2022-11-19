import { Injectable } from '@nestjs/common';

@Injectable()
export class VehicleService {
  create(createVehicleDto: any) {
    return 'This action adds a new vehicle';
  }

  findAll() {
    return `This action returns all vehicle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  update(id: number, updateVehicleDto: any) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
