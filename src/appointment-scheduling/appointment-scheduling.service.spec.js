"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const appointment_scheduling_service_1 = require("./appointment-scheduling.service");
describe('AppointmentSchedulingService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [appointment_scheduling_service_1.AppointmentSchedulingService],
        }).compile();
        service = module.get(appointment_scheduling_service_1.AppointmentSchedulingService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
