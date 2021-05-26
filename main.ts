import { MeetingResource } from './models/meetingResource';
import { ConferenceRoom, conferenceRoomData } from './models/conferenceRoom';
import { PartyTent, partyTentData } from './models/partyTent';
import { Building, buildingData } from './models/building';

function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {

  let bigRooms: Array<T> = [];

  rooms.forEach(r => {
    if (r.capacity > minSize) {
      bigRooms.push(r);
    }
  });

  return bigRooms;

}

let getLargeRooms: <T extends MeetingResource>(rooms: Array<T>, minSize: number) => Array<T>;

getLargeRooms = getBigRooms;

let largeRooms = getLargeRooms(conferenceRoomData, 30);

console.log(largeRooms);


function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
  return data.splice(amountToShorten, data.length);
}

let shrinkArray: <U>(original: Array<U>, units: number) => Array<U>;

shrinkArray = shortenArray;

// let stringArray: string[] = ['Visual Basic', 'C++', 'TypeScript', 'JavaScript'];

// let fewerLanguages = shortenArray<string>(stringArray, 2);

// console.log(fewerLanguages);