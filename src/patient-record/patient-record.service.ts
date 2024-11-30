import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientRecordService {
  private patientRecords:any = [];


  getPatientMessage(){
    return 'From patient'
  }
  
  createPatientRecord(record: any) {
    this.patientRecords.push(record);
    return record;
  }

  getPatientRecords() {
    return this.patientRecords;
  }

  updatePatientRecord(id: string, updatedRecord: any) {
    const index = this.patientRecords.findIndex((record:any) => record.id === id);
    // if (index > -1) {
    //   this.patientRecords[index] = { ...this.patientRecords[index], ...updatedRecord };
    //   return this.patientRecords[index];
    // }
    return null;
  }
}

