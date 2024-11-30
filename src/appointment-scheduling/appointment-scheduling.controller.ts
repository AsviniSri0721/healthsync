import { AppointmentSchedulingService } from './appointment-scheduling.service';
import { Controller, Get } from '@nestjs/common';

@Controller('appointment-scheduling')
export class AppointmentSchedulingController {
    constructor(private readonly appointmentSchedulingService: AppointmentSchedulingService) {}

    @Get()  // or @Get('your-specific-route')
    getHello(): string {
        return this.appointmentSchedulingService.getAppointmentMessage();
    }
}