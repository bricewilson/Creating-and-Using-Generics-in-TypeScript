import { ConferenceRoom, conferenceRoomData } from "./conferenceRoom";
import { MeetingResource } from "./meetingResource";

class Reservation<T extends MeetingResource> {
  reservationDate: Date;
  organizerName: string;
  resource: T;

  requestResource(requestedResource: T, requester: string) {
    this.resource = requestedResource;
    this.organizerName = requester;
    console.log(`${requester} requested a reservation for ${requestedResource.name}`);
  }
}

let teamMeeting = new Reservation<ConferenceRoom>();
teamMeeting.requestResource(conferenceRoomData[0], 'Gary');
