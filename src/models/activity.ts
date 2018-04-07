export interface ActivityI {
  activityName: string;
  date: string;
  time: string;
  location: string;
  ageRestriction: string;
  price: number;
  activity_id: number;
  canEdit?: boolean;
}