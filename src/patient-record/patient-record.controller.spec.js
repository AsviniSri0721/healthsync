"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const patient_record_controller_1 = require("./patient-record.controller");
describe('PatientRecordController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [patient_record_controller_1.PatientRecordController],
        }).compile();
        controller = module.get(patient_record_controller_1.PatientRecordController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
