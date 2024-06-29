import {CtxResource} from "./ctx-resource";
import {CtxHumanName} from "./shared/ctx-human-name";

export interface CtxPractitioner extends CtxResource {
  resourceType : "practitioner",
  name : CtxHumanName, // The name(s) associated with the practitioner
  roles: string[],
}
