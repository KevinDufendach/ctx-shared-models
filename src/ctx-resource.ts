import {Extension} from "fhir/r4";

export type CtxResourceType = (
  'CtxPatient' |
  'CtxEncounter' |
  'CtxLocation' |
  'CtxList' |
  'CtxProcedure' |
  'CtxFlag' |
  'CtxOrganization' |
  'CtxCareTeam' |
  'CtxPractitioner' |
  'CtxAppointment' |
  'CtxCondition' |
  'CtxObservation' |
  'CtxBundle')

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
