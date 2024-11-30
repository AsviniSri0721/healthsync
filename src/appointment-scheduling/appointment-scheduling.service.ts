import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentSchedulingService {
  private appointments:any = [];

  getAppointmentMessage(){
    return 'Hello from appointment'
  }

  bookAppointment(appointment: any) {
    this.appointments.push(appointment);
    return appointment;
  }

  getAppointments() {
    return this.appointments;
  }

  cancelAppointment(id: string) {
    this.appointments = this.appointments.filter((appointment:any) => appointment.id !== id);
    return { message: 'Appointment canceled' };
  }
}

