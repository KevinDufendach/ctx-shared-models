import {CtxResource} from "./ctx-resource";
import {CodeableConcept, Period} from "fhir/r4";

export interface CtxCareTeam extends CtxResource {
  resourceType: "CtxCareTeam",
  identifier: string, // Mandatory // External Ids for this item
  name: string, // Name of the team, such as crisis assessment team
  subject?: string, // Who care team is for
  encounter?: string, // Encounter created as part of
  participant: { // C? Members of the team
    role?: CodeableConcept[], // Type of involvement
    member: string // { Reference(Practitioner|PractitionerRole|RelatedPerson|Patient|Organization|CareTeam) }, // Who is involved
    period: Period // Time period of participant
  }[],
}
