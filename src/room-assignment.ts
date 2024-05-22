import {CtxResource} from "./ctx-resource";
import {CtxPeriod} from "./shared/ctx-period";
import {OperationalStatus} from "./ctx-location";

export type LocationStatus = 'planned' | 'confirmed' | 'active' | 'reserved' | 'completed' | 'leaving';

export const LocationStatusMap: ({[key in LocationStatus]: OperationalStatus}) = {
  planned: 'arriving',
  confirmed: 'arriving',
  active: 'occupied',
  leaving: 'leaving',
  reserved: 'reserved',
  completed: 'unoccupied',
}

export interface CtxRoomAssignment extends CtxResource {
  resourceType: 'room-assignment'
  locationId: string
  encounterId: string
  subjectId: string
  status: LocationStatus
  period: CtxPeriod
}
