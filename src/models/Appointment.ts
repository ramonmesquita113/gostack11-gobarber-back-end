import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  // Just Postgres has 'timestamp with time zone', others databases use timestamp
  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
