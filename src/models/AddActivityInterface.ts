import { NewActivityInterface } from './NewActivityInterface';

export interface AddActivityInterface {
  newActivity: NewActivityInterface;
  ageLimits: string[];
  selectedAge: string;
  locations: string[];
  categories: string[];
  dateComponent: number;
}
