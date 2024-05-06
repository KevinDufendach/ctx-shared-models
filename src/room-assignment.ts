import {LocationStatus} from "./ctx-encounter";
import {Period} from "fhir/r4";

export interface LocationEncounter {
  encounterId: string
  subjectId: string
  status: LocationStatus
  period: Period
}

export interface RoomAssignment {
  location: string,
  encounters: LocationEncounter[]
}
