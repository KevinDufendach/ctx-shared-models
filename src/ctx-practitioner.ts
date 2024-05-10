import {CtxResource} from "./ctx-resource";
import {HumanName, PractitionerQualification} from "fhir/r4";

export interface CtxPractitioner extends CtxResource {
  resourceType : "practitioner",
  name : HumanName, // The name(s) associated with the practitioner
  qualification?: PractitionerQualification[],
}
