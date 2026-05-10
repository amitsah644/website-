import { Speaker, ScheduleItem, ConferenceDate } from './types';

export const CONFERENCE_NAME = "2026 10th Sustainable Development & Green Technology International Symposium";
export const CONFERENCE_SHORT_NAME = "SSDGT 2026";
export const CONFERENCE_DATES: ConferenceDate[] = [
  { date: "May 22, 2026", label: "Day 1" },
  { date: "May 23, 2026", label: "Day 2" },
  { date: "May 24, 2026", label: "Day 3" },
];

export const SPEAKERS: Speaker[] = [
  {
    id: "1",
    name: "Dr. Elena Rossi",
    role: "Professor of Renewable Energy",
    organization: "Milan Polytechnic University",
    bio: "Dr. Rossi is a leading researcher in photovoltaic systems and has published over 200 papers on green energy transitions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Chief Sustainability Officer",
    organization: "Global Tech Solutions",
    bio: "Marcus leads corporate sustainability initiatives and specializes in circular economy integration within manufacturing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Dr. Sarah Jenkins",
    role: "Environmental Policy Advisor",
    organization: "United Nations Environment Programme",
    bio: "Sarah works at the intersection of climate science and policy, helping nations implement sustainable development goals.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    id: "s1",
    time: "08:30 - 09:00",
    title: "Registration & Morning Coffee",
    location: "NFU Conference Center Lobby",
    type: "session"
  },
  {
    id: "s2",
    time: "09:00 - 09:30",
    title: "Opening Ceremony",
    location: "Main Ballroom, NFU",
    type: "session"
  },
  {
    id: "s3",
    time: "09:30 - 11:00",
    title: "Keynote: Achieving Net Zero in Manufacturing",
    location: "Main Ballroom",
    speakerId: "1",
    type: "keynote"
  },
  {
    id: "s4",
    time: "11:00 - 11:20",
    title: "Refreshment Break",
    location: "Poster Session Area",
    type: "break"
  },
  {
    id: "s5",
    time: "11:20 - 12:40",
    title: "Technical Session: Renewable Energy Systems",
    location: "Room 101",
    speakerId: "2",
    type: "session"
  }
];

export const REGISTRATION_FEES = [
  { type: "Student Participant", fee: "NT$ 8,000 / USD 250", description: "Full access to sessions, proceedings, and lunches." },
  { type: "Regular Participant", fee: "NT$ 12,000 / USD 400", description: "Full access for professionals and researchers." },
  { type: "Local Attendee (Taiwan)", fee: "NT$ 4,000 / USD 130", description: "Reduced fee for non-presenting local participants." },
  { type: "Online Presenter", fee: "NT$ 6,000 / USD 200", description: "For virtual session participation." }
];

export const IMPORTANT_DATES = [
  { event: "Full Paper/Abstract Submission", date: "January 15, 2026" },
  { event: "Acceptance Notification", date: "February 20, 2026" },
  { event: "Camera-Ready Submission", date: "March 10, 2026" },
  { event: "Early Bird Registration", date: "March 30, 2026" },
  { event: "Conference Days", date: "May 22-24, 2026" }
];

export const PROCEEDINGS_INFO = "Accepted papers will be recommended for publication in IOP Conference Series: Earth and Environmental Science (EES), Springer Proceedings in Energy, or selected MDPI Sustainability Special Issues, indexed by EI Compendex and Scopus.";

export const VENUE_INFO = {
  name: "National Formosa University (NFU), Huwei site",
  address: "64 Wunhua Rd., Huwei, Yunlin 632, Taiwan (R.O.C.)",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8236166418!2d120.4287233!3d23.700146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ebd868f000c6d%3A0xf67323b7e7c8d9e7!2sNational%20Formosa%20University!5e0!3m2!1sen!2stw!4v1715367665432!5m2!1sen!2stw"
};
