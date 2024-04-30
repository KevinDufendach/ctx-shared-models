import {CodeableConcept, Period} from "fhir/r4";
import {CtxResource} from "./ctx-resource";
import {CtxProcedure} from "./ctx-procedure";

export type ApprovalStatus = 'approved' | 'denied' | 'pending' | 'unnecessary'

export interface CtxEncounterAdmission {
  initialContactDate: Date | null
  origin: string | null
  transferAcuity?: 'urgent' | 'emergent' | null
  insuranceApprovalStatus?: ApprovalStatus | null
  expectedAdmissionDate?: Date | null
  destination?: string | null
  admissionNotes?: string | null
  admissionDiagnosis?: string | null
  data?: {[key in string]: any}
}

export interface CtxEncounterDischarge {
  expectedDischargeDate?: Date | string | null
  destination?: string | null
  destinationType?: 'home' | 'external' | 'internal' | null
  insuranceApprovalStatus?: ApprovalStatus | null
  notes?: string
  data?: {[key in string]: any}
}

export interface CtxEncounter extends CtxResource {
  resourceType: "CtxEncounter"
  status: 'planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown';
  period?: Period;
  diagnosis?: {
    condition: string,
    rank?: number,
    use?: CodeableConcept
  };
  subjectId: string; // ID of the patient subject
  activeLocationId: string; // ID of the currently active location
  pendingLocationsId: string[]; // Ids of pending/future locations
  locations: {
    locationId: string,
    status: 'planned' | 'active' | 'reserved' | 'completed',
    period: Period
  }[]

  procedures?: CtxProcedure[]

  admissionData: CtxEncounterAdmission
  dischargeData: CtxEncounterDischarge

  // Compiled data
  careTeam?: string;
}
