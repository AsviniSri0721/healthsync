import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientRecordModule } from './patient-record/patient-record.module';
import { AppointmentSchedulingModule } from './appointment-scheduling/appointment-scheduling.module';
import { NotificationModule } from './notification/notification.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PatientRecordModule, AppointmentSchedulingModule, NotificationModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
