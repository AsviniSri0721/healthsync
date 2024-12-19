import { Controller, Get } from '@nestjs/common';
import { PatientRecordService } from './patient-record.service';

@Controller('patient-record')
export class PatientRecordController {
    constructor(private readonly patientRecordService: PatientRecordService) {}
    @Get('')
    getHello() {
      return this.patientRecordService.getPatientMessage();
    }
}
