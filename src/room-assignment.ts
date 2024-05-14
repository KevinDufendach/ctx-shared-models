import {CtxResource} from "./ctx-resource";
import {CtxPeriod} from "./shared/ctx-period";

export type LocationStatus = 'planned' | 'active' | 'reserved' | 'completed';

export interface CtxRoomAssignment extends CtxResource {
  resourceType: 'room-assignment'
  locationId: string
  encounterId: string
  subjectId: string
  status: LocationStatus
  period: CtxPeriod
}
