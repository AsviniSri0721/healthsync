import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientRecord } from './patient-record.entity';
import { Analytics } from '../analytics/analytics.entity';

@Injectable()
export class PatientRecordService {
  constructor(
    @InjectRepository(PatientRecord) private readonly patientRepo: Repository<PatientRecord>,
    // @InjectRepository(Analytics, 'redshiftConnection') private readonly analyticsRepo: Repository<Analytics>, 
  ) {}

  async getPatientMessage():Promise<any> {
    return 'From patient';
  }

  async createPatientRecord(record: Partial<PatientRecord>): Promise<PatientRecord> {
    const newRecord = this.patientRepo.create(record);
    const savedRecord = await this.patientRepo.save(newRecord);

    // await this.analyticsRepo.save({
    //   metricName: 'patient_created',
    //   value: 1,
    //   recordedAt: new Date(),
    // });

    return savedRecord;
  }

  async getPatientRecords(): Promise<PatientRecord[]> {
    return await this.patientRepo.find();
  }

  async updatePatientRecord(id: string, updatedRecord: Partial<PatientRecord>): Promise<PatientRecord | null> {
    const record = await this.patientRepo.findOne({ where: { id: Number(id) } });

    if (!record) {
      return null;
    }

    const updated = Object.assign(record, updatedRecord);
    return await this.patientRepo.save(updated);
  }
}
