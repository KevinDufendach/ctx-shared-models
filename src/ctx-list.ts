import {CtxResource} from "./ctx-resource";

export interface CtxListEntry<T> { // C? Entries in the list
  entryId: string,
  date: Date, // When item added to list
  itemId: string // R!  Actual entry
  deleted?: boolean, // C? If this item is actually marked as deleted,
  data?: T
}

export interface CtxList<T> extends CtxResource {
  resourceType: "list",
  identifier: string, // Business identifier
  title: string, // Descriptive name for the list
  entries: CtxListEntry<T>[],
}
