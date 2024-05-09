import {CtxResource} from "./ctx-resource";
import {CodeableConcept, Period} from "fhir/r4";
import {LocationEncounter} from "./room-assignment";

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

// export type LocationStatus = 'planned' | 'active' | 'reserved' | 'completed';
//
// export interface LocationEncounter {
//   encounterId: string,
//   status: LocationStatus,
//   period: Period
// }

export interface CtxLocation extends CtxResource {
  resourceType: "CtxLocation"
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
