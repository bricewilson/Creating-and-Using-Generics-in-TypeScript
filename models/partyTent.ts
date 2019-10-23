import { MeetingResource } from "./meetingResource";

export class PartyTent implements MeetingResource {
  name: string;
  capacity: number;
  companyOwned: boolean;
  tablesIncluded: number;
}