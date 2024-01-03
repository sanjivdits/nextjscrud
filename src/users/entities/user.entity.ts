
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('records')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;  
}