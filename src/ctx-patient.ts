import {CtxResource} from "./ctx-resource";
import {CtxHumanName} from "./shared/ctx-human-name";

/**
 * The Patient resource contains data that are associated with the specific patient
 */
export interface CtxPatient<T> extends CtxResource {
  resourceType: "patient"
  // identifier: string
  name: CtxHumanName
  gender?: ('male' | 'female' | 'other' | 'unknown')
  birthDate?: Date

  diagnoses?: {
    condition: string
    use?: 'primary' | 'admission' | 'working' | null
  }[]

  data?: T
}
