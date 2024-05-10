import {Period} from "fhir/r4";
import {CtxResource} from "./ctx-resource";

export type LocationStatus = 'planned' | 'active' | 'reserved' | 'completed';

export interface CtxRoomAssignment extends CtxResource {
  resourceType: 'room-assignment'
  locationId: string
  encounterId: string
  subjectId: string
  status: LocationStatus
  period: Period
}
