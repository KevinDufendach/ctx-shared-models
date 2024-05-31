import {HumanName} from "fhir/r4";
import {CtxResource} from "./ctx-resource";

/**
 * The Patient resource contains data that are associated with the specific patient
 */
export interface CtxPatient<T> extends CtxResource {
  resourceType: "patient"
  // identifier: string
  name: HumanName
  gender?: ('male' | 'female' | 'other' | 'unknown')
  birthDate?: Date

  diagnoses?: {
    condition: string
    use?: 'primary' | 'admission' | 'working' | null
  }[]

  data?: T
}
