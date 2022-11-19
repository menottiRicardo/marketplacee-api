import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { loggingMiddleware } from 'common/middlewares/logging.middleware';
import { VehicleModule } from './vehicle/vehicle.module';
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware(new Logger('PrismaMiddleware'))],
      },
    }),
    VehicleModule,
    VehicleTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
