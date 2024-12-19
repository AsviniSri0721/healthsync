import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientRecordController } from './patient-record.controller';
import { PatientRecordService } from './patient-record.service';
import { PatientRecord } from './patient-record.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientRecord]), // MySQL Entity
    // TypeOrmModule.forFeature([Analytics], 'redshiftConnection'), // Redshift Entity
  ],
  controllers: [PatientRecordController],
  providers: [PatientRecordService],
})
export class PatientRecordModule {}
