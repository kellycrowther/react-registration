export interface ActivityI {
  activityName: string;
  date: string;
  time: string;
  location: string;
  ageRestriction: string;
  price: number;
  activity_id: number;
  availability_id: number;
  canEdit?: boolean;
  category: string;
  day: string;
  quantity: number;
  date_time: Date;
}