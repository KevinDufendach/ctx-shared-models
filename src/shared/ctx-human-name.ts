import {CtxPeriod} from "./ctx-period";

export interface CtxHumanName {
  use?: string
  text?: string
  family?: string
  given?: string[]
  prefix?: string[]
  suffix?: string[]
  period?: CtxPeriod
}
