import {CtxResource} from "./ctx-resource";
import {HumanName, PractitionerQualification} from "fhir/r4";

export interface CtxPractitioner extends CtxResource {
  resourceType : "CtxPractitioner",
  name : HumanName, // The name(s) associated with the practitioner
  qualification?: PractitionerQualification[],
}
