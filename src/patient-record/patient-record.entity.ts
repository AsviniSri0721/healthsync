import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PatientRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  email: string;
}
