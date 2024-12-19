import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Analytics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  metricName: string;

  @Column('float')
  value: number;

  @Column({ type: 'timestamp' })
  recordedAt: Date;
}
