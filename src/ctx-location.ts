import {CtxResource} from "./ctx-resource";
import {CodeableConcept} from "fhir/r4";
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

// export type LocationStatus = 'planned' | 'active' | 'reserved' | 'completed';
//
// export interface LocationEncounter {
//   encounterId: string,
//   status: LocationStatus,
//   period: Period
// }

export interface CtxLocation extends CtxResource {
  resourceType: "location"
  name: string
  identifier: string
  physicalType: 'si' | 'bu' | 'wa' | 'ro' | 'bd' | 'ho'

  // operationalStatus: OperationalStatus
  // operationalStatusText?: string

  // activeEncounterId?: string | null
  // encounters?: LocationEncounter[]

  partOf?: string | null // ID of another location this is physically a part of
  characteristics?: CodeableConcept[]
}
