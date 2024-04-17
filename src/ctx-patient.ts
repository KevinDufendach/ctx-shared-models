import {HumanName} from "fhir/r4";
import {CtxResource} from "./ctx-resource";

/**
 * The Patient resource contains data that are associated with the specific patient
 */
export interface CtxPatient extends CtxResource {
  resourceType: "CtxPatient"
  identifier: string
  name: HumanName
  gender?: ('male' | 'female' | 'other' | 'unknown')
  birthDate?: Date

  diagnoses?: {
    condition: string
    use?: 'primary' | 'admission' | 'working' | null
  }[]

  // isNameAlert: boolean,
  // isUpcomingDischarge: boolean,
  // bedsideRN: string | null,
  // transferOfInterest: boolean,
  // adultPatient: boolean,

  // clinicalData: {
  //   diagnosis: string | null,
  //   isDialysis: boolean,
  //   isCriticalAirway: boolean,
  //   isIsolette: boolean,
  //   isWatcher: boolean,
  //   watcherReason: string | null,
  //   infection: string | null,
  //   isolation: string | null,
  //   hasTrach: boolean,
  //   respiratorySupport: string | null,
  //   resuscitationStatus: string | null,
  //   crossCheck: boolean,
  //   crossCheckReason: string | null,
  //   isVAD: boolean,
  //   isCLABSI: boolean,
  //   isUERisk: boolean,
  //   isOther: boolean,
  //   otherReason: string | null,
  // },
  // deliveryData?: {
  //   isPhoneTree: boolean,
  //   isInHouse: boolean,
  //   exit: 'ECMO' | 'airway' | null,
  //   deliveryDate: Date | null,
  //   deliveryMode: 'CS' | 'IOL' | 'standby' | null,
  //   deliveryTime: string | null,
  //   dueDate: string | null,
  //   deliveryLocation: string | null,
  //   admissionUnit: 'NICU' | 'CICU' | null,
  //   plan: string | null,
  //   deliveryDiagnosis: string | null,
  // },
  // procedureData?: {
  //   procedureDate: Date | null,
  //   procedureTime: string | null,
  //   procedureName: string | null,
  //   procedureRoom: string | null,
  //   rebookCount: string | null,
  //   procedureSpace: 'CV OR' | 'MRI' | 'ECHO' | 'CARU' | 'Cath Lab' | 'In Patient Room' | '',
  //   surgeon: string | null,
  //   anesthesiologist: string | null,
  //   weight: string | null,
  //   crossCheckAtProcedure: boolean,
  //   postProcedureDestination: string | null,
  //   pump: boolean,
  //   ecmoStandby: boolean,
  //   comboProcedure: boolean,
  // },

}
