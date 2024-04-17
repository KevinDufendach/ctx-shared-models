import {CtxResource} from "./ctx-resource";
import {CodeableConcept} from "fhir/r4";

export interface CtxListEntry { // C? Entries in the list
  flag?: CodeableConcept[], // Status/Workflow information about this item
  date: Date, // When item added to list
  itemId: string // R!  Actual entry
  deleted?: boolean, // C? If this item is actually marked as deleted,
  data?: any
}

export interface CtxList extends CtxResource {
  resourceType: "CtxList",
  identifier: string, // Business identifier
  title: string, // Descriptive name for the list
  entries: CtxListEntry[],
}
