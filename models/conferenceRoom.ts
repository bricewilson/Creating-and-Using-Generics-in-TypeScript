import { MeetingResource } from "./meetingResource";

export class ConferenceRoom implements MeetingResource {
  name: string;
  capacity: number;
  hasProjector: boolean;
  location: string;
}