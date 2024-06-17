import {CtxResource} from "./ctx-resource";
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


export interface EncounterCareTeam {
  teamId: string
  group?: string
  role?: string
  status: 'planned' | 'active' | 'completed'
  period?: CtxPeriod
}

export interface CtxRoomAssignment extends CtxResource {
  resourceType: 'room-assignment'
  locationId: string
  encounterId: string
  subjectId: string
  careTeams: string | null
  // unitId: string | null
  status: LocationStatus
  period: CtxPeriod
}
