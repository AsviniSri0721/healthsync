import { NestFactory } from '@nestjs/core';
import { PatientRecordModule } from './patient-record.module';

async function bootstrap() {
  const app = await NestFactory.create(PatientRecordModule);
  await app.listen(process.env.PORT ?? 3002);
  console.log(`Appointment Scheduling service is running on http://localhost:${process.env.PORT ?? 3002}`);
}
bootstrap();
