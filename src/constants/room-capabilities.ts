import {CtxCoding} from "../shared/ctx-coding";

const ROOM_CAPABILITIES_SYSTEM = 'http://whiteboard.cchmc.org/extensions/room-capabilities'

export const POSITIVE_PRESSURE: CtxCoding = {
  code: 'positive-pressure',
  system: ROOM_CAPABILITIES_SYSTEM,
  display: 'positive pressure'
}

export const NEGATIVE_PRESSURE: CtxCoding = {
  code: 'negative-pressure',
  system: ROOM_CAPABILITIES_SYSTEM,
  display: 'negative pressure'
}
