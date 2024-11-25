import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentSchedulingService } from './appointment-scheduling.service';

describe('AppointmentSchedulingService', () => {
  let service: AppointmentSchedulingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentSchedulingService],
    }).compile();

    service = module.get<AppointmentSchedulingService>(AppointmentSchedulingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
