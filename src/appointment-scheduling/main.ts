import { NestFactory } from '@nestjs/core';
import { AppointmentSchedulingModule } from './appointment-scheduling.module';

async function bootstrap() {
  const app = await NestFactory.create(AppointmentSchedulingModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log('Appointment Scheduling service is running on http://localhost:3000');
}
bootstrap();
