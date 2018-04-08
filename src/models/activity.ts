export interface ActivityI {
  activityName: string;
  date: string;
  date_time: Date;
  time: string;
  location: string;
  ageRestriction: string;
  price: number;
  activity_id: number;
  date_id: number;
  canEdit?: boolean;
}