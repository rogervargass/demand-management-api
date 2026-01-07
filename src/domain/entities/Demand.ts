import { Entity } from 'src/core/entity';
import { DemandStatus } from '../value-objects/DemandStatus';

export interface DemandProps {
  id: string;
  title: string;
  description?: string;
  userId: string;
  status: DemandStatus;
  createdAt: Date;
  updatedAt?: Date;
}

export class Demand extends Entity<DemandProps> {
  constructor(props: DemandProps) {
    super(props);

    this.props = {
      ...props,
      status: DemandStatus.OPEN,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id(): string {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  get userId(): string {
    return this.props.userId;
  }

  get status(): DemandStatus {
    return this.props.status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  updateStatus(status: DemandStatus): void {
    if (this.props.status === DemandStatus.DONE) {
      throw new Error('Completed demands cannot be updated');
    }

    this.props.status = status;
    this.props.updatedAt = new Date();
  }
}
