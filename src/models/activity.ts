export interface ActivityI {
  activityName: string;
  date: string;
  time: string;
  location: string;
  ageRestriction: string;
  price: number;
  uid: number;
  canEdit?: boolean;
}