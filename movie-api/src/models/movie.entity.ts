import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'date', nullable: false })
  releaseDate: Date;

  @Column('simple-array', { nullable: false })
  genre: string[];

  // Add more properties and relationships as needed
}