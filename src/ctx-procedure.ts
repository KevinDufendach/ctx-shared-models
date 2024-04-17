import {CtxResource} from "./ctx-resource";

export interface CtxProcedure extends CtxResource {
  resourceType: "CtxProcedure",
  status: "draft" | "in-progress" | "preparation" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error" | null,

  subject: string | null
  encounter: string | null

  description: string | null
  team: {
    performer: string | null
    anesthesiologist?: string | null
  }

  date?: Date | null
  time?: string | null

  space?: string | null
  room?: string | null

  postProcedureDestination?: string | null
}

