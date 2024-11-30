"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const appointment_scheduling_controller_1 = require("./appointment-scheduling.controller");
describe('AppointmentSchedulingController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [appointment_scheduling_controller_1.AppointmentSchedulingController],
        }).compile();
        controller = module.get(appointment_scheduling_controller_1.AppointmentSchedulingController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
