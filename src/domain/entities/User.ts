import { Entity } from 'src/core/entity';
import { Email } from '../value-objects/Email';

export interface UserProps {
  id: string;
  fullName: string;
  email: Email;
  active: boolean;
  createdAt: Date;
}

export class User extends Entity<UserProps> {
  constructor(props: UserProps) {
    super(props);

    this.props = {
      ...props,
      active: props.active ?? true,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id(): string {
    return this.props.id;
  }

  get fullName(): string {
    return this.props.fullName;
  }

  get email(): Email {
    return this.props.email;
  }

  get active(): boolean {
    return this.props.active;
  }

  get currentState(): UserProps {
    return this.props;
  }
}
