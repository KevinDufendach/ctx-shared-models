import {CtxResource} from "./ctx-resource";
import {CtxPeriod} from "./shared/ctx-period";
import {OperationalStatus} from "./ctx-location";

export type LocationStatus = 'planned' | 'active' | 'reserved' | 'completed';

export const LocationStatusMap: ({[key in LocationStatus]: OperationalStatus}) = {
  planned: 'arriving',
  active: 'occupied',
  reserved: 'reserved',
  completed: 'unoccupied'
}

export interface CtxRoomAssignment extends CtxResource {
  resourceType: 'room-assignment'
  locationId: string
  encounterId: string
  subjectId: string
  status: LocationStatus
  period: CtxPeriod
}
