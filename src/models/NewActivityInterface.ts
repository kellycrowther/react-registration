import { AvailabilityInterface } from './AvailabilityInterface';

export interface NewActivityInterface {
  activityName: string;
  location: string;
  ageRestriction: string;
  price: number;
  canEdit: boolean;
  category: string;
  availability: Array<AvailabilityInterface>;
}
