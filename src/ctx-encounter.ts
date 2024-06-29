import {CodeableConcept} from "fhir/r4";
import {CtxResource} from "./ctx-resource";
import {CtxPeriod} from "./shared/ctx-period";

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

export interface EncounterCareTeam {
  teamId: string
  group?: string
  role?: string
  status: 'planned' | 'active' | 'completed'
  period?: CtxPeriod
}

export type LocationStatus = 'planned' | 'confirmed' | 'active' | 'reserved' | 'completed' | 'leaving' | 'canceled'

export interface EncounterLocation {
  locationId: string
  status: LocationStatus
  period: CtxPeriod
  info?: string
  form?: 'bed' | 'ward' | 'external' | 'home'
}

export interface CtxEncounter extends CtxResource {
  resourceType: "encounter"
  status: 'planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown';
  period?: CtxPeriod;
  diagnosis?: {
    condition: string,
    rank?: number,
    use?: CodeableConcept
  };
  subjectId: string; // ID of the patient subject

  admissionData: CtxEncounterAdmission
  dischargeData: CtxEncounterDischarge

  careTeams: EncounterCareTeam[]
  locations: EncounterLocation[]
}
