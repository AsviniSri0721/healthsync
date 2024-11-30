"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSchedulingService = void 0;
const common_1 = require("@nestjs/common");
let AppointmentSchedulingService = class AppointmentSchedulingService {
    constructor() {
        this.appointments = [];
    }
    getAppointmentMessage() {
        return 'Hello from appointment';
    }
    bookAppointment(appointment) {
        this.appointments.push(appointment);
        return appointment;
    }
    getAppointments() {
        return this.appointments;
    }
    cancelAppointment(id) {
        this.appointments = this.appointments.filter((appointment) => appointment.id !== id);
        return { message: 'Appointment canceled' };
    }
};
exports.AppointmentSchedulingService = AppointmentSchedulingService;
exports.AppointmentSchedulingService = AppointmentSchedulingService = __decorate([
    (0, common_1.Injectable)()
], AppointmentSchedulingService);
