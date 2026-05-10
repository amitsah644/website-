export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  image?: string;
  bio: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  location: string;
  speakerId?: string;
  type: 'keynote' | 'session' | 'break' | 'workshop';
}

export interface ConferenceDate {
  date: string;
  label: string;
}
