import {Coding} from "fhir/r4";

const ROOM_CAPABILITIES_SYSTEM = 'http://whiteboard.cchmc.org/extensions/room-capabilities'

export const POSITIVE_PRESSURE: Coding = {
  code: 'positive-pressure',
  system: ROOM_CAPABILITIES_SYSTEM,
  display: 'positive pressure'
}

export const NEGATIVE_PRESSURE: Coding = {
  code: 'negative-pressure',
  system: ROOM_CAPABILITIES_SYSTEM,
  display: 'negative pressure'
}
