"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const patient_record_service_1 = require("./patient-record.service");
describe('PatientRecordService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [patient_record_service_1.PatientRecordService],
        }).compile();
        service = module.get(patient_record_service_1.PatientRecordService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
