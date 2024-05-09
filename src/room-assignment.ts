import {Period} from "fhir/r4";

export type LocationStatus = 'planned' | 'active' | 'reserved' | 'completed';

export interface RoomAssignment {
  docId: string
  locationId: string
  encounterId: string
  subjectId: string
  status: LocationStatus
  period: Period
}
