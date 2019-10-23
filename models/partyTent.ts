import { MeetingResource } from "./meetingResource";

export class PartyTent implements MeetingResource {
  name: string;
  capacity: number;
  companyOwned: boolean;
  tablesIncluded: number;
}

export const partyTentData: PartyTent[] = [
  { name: 'Parasol', capacity: 15, companyOwned: true, tablesIncluded: 3},
  { name: 'Shady', capacity: 100, companyOwned: true, tablesIncluded: 10},
  { name: 'Big Top', capacity: 200, companyOwned: false, tablesIncluded: 40},
  { name: 'Sun Fun', capacity: 50, companyOwned: true, tablesIncluded: 5}
];