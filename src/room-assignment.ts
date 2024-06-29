import {CtxPeriod} from "./shared/ctx-period";
import {LocationStatus} from "./ctx-encounter";

export type OperationalStatus =
  'unoccupied'
  | 'occupied'
  | 'leaving'
  | 'arriving'
  | 'closed'
  | 'housekeeping'
  | 'reserved'
  | 'contaminated'
  | 'isolated'

export const LocationStatusMap: ({[key in LocationStatus]: OperationalStatus}) = {
  planned: 'arriving',
  confirmed: 'arriving',
  active: 'occupied',
  leaving: 'leaving',
  reserved: 'reserved',
  completed: 'unoccupied',
  canceled: 'unoccupied'
}

export interface CtxRoomAssignment {
  resourceType: 'room-assignment'
  locationId: string
  encounterId: string
  subjectId: string
  careTeams: string[]
  status: LocationStatus
  period: CtxPeriod
}
