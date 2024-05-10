import {CtxResource} from "./ctx-resource";
import {CodeableConcept} from "fhir/r4";

export interface CtxListEntry<U> { // C? Entries in the list
  entryId: string,
  flag?: CodeableConcept[], // Status/Workflow information about this item
  date: Date, // When item added to list
  itemId: string // R!  Actual entry
  deleted?: boolean, // C? If this item is actually marked as deleted,
  data?: U
}

export interface CtxList<T, U> extends CtxResource<T> {
  resourceType: "list",
  identifier: string, // Business identifier
  title: string, // Descriptive name for the list
  entries: CtxListEntry<U>[],
}
