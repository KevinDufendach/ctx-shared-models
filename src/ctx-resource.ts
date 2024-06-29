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
  data?: any
  // data?: {[key in string]: any}
}
