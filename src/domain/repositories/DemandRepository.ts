import { Demand } from '../entities/Demand';
import { BaseRepository } from './BaseRepository';

export interface DemandRepository extends BaseRepository<Demand> {
  update(demand: Demand): Promise<void>;
}
