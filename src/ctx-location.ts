import {CtxResource} from "./ctx-resource";
import {CtxCoding} from "./shared/ctx-coding";

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
  characteristics?: CtxCoding[]
}
