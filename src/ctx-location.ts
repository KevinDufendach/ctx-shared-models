import {CtxResource} from "./ctx-resource";
import {CodeableConcept} from "fhir/r4";

export interface CtxLocation extends CtxResource {
    resourceType: "CtxLocation"
    name: string
    identifier: string
    physicalType: 'si' | 'bu' | 'wa' | 'ro' | 'bd' | 'ho'

    operationalStatus?: 'occupied' | 'unoccupied' | 'leaving' | 'closed' | 'housekeeping' | 'reserved' | 'contaminated' | 'isolated'
    operationalStatusText?: string

    occupant?: string | null
    futureOccupants?: string[]

    partOf?: string // ID of another location this is physically a part of
    characteristics?: CodeableConcept[]
}
