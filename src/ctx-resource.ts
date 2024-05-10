import {Extension} from "fhir/r4";

export type CtxResourceType = (
  'patient' |
  'encounter' |
  'location' |
  'list' |
  'procedure' |
  'flag' |
  'organization' |
  'care-team' |
  'practitioner' |
  'appointment' |
  'condition' |
  'observation' |
  'room-assignment' |
  'bundle')

export interface CtxResource {
  resourceType: CtxResourceType,
  docId: string,

  /**
   * Version should increment with each change of the resource
   */
  // version: number
  identifier?: string
  extension?: Extension[]
  data?: {[key in string]: any}
}
