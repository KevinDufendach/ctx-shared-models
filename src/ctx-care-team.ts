import {CtxResource} from "./ctx-resource";
import {CtxPeriod} from "./shared/ctx-period";

export interface RGB {
  r: number
  g: number
  b: number
}

export interface CtxCareTeam extends CtxResource {
  resourceType: "care-team",
  identifier: string, // Mandatory // External Ids for this item
  name: string, // Name of the team, such as crisis assessment team

  color?: RGB

  participants: { // Members of the team
    practitionerId?: string // Reference to a practitioner ID if known
    displayName?: string // String display name, can be used in place of practitionerId
    role?: string // Role of the participant
    period?: CtxPeriod // Time period of participant
  }[],
}
