import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentSchedulingController } from './appointment-scheduling.controller';

describe('AppointmentSchedulingController', () => {
  let controller: AppointmentSchedulingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentSchedulingController],
    }).compile();

    controller = module.get<AppointmentSchedulingController>(AppointmentSchedulingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
