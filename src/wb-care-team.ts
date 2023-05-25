import {WbResource} from "./wb-resource";
import {CodeableConcept, Period} from "fhir/r4";

export interface WbCareTeam extends WbResource {
  WbResourceType: "WbCareTeam",
  identifier: string, // Mandatory // External Ids for this item
  // "status" : "<code>", // proposed | active | suspended | inactive | entered-in-error
  // "category" : [{ CodeableConcept }], // Type of team
  name: string, // Name of the team, such as crisis assessment team
  subject: string, // Who care team is for
  encounter: string, // Encounter created as part of
  // "period" : { Period }, // Time period team covers
  participant: [{ // C? Members of the team
    role?: CodeableConcept[], // Type of involvement
    member: string // { Reference(Practitioner|PractitionerRole|RelatedPerson|Patient|Organization|CareTeam) }, // Who is involved
    // "onBehalfOf"?: { Reference(Organization) }, // Organization of the practitioner
    period: Period // Time period of participant
  }],
  // "reasonCode" : [{ CodeableConcept }], // Why the care team exists
  // "reasonReference" : [{ Reference(Condition) }], // Why the care team exists
  // "managingOrganization" : [{ Reference(Organization) }], // Organization responsible for the care team
  // "telecom" : [{ ContactPoint }], // A contact detail for the care team (that applies to all members)
  // "note" : string // [{ Annotation }] // Comments made about the CareTeam
}
