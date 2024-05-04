import {CtxResource} from "./ctx-resource";
import {CodeableConcept} from "fhir/r4";

export type OperationalStatus = 'unoccupied' | 'occupied' | 'leaving' | 'arriving' | 'closed' | 'housekeeping' | 'reserved' | 'contaminated' | 'isolated'

export interface CtxLocation extends CtxResource {
    resourceType: "CtxLocation"
    name: string
    identifier: string
    physicalType: 'si' | 'bu' | 'wa' | 'ro' | 'bd' | 'ho'

    operationalStatus: OperationalStatus
    // operationalStatusText?: string

    activeEncounterId?: string | null
    futureEncounterId?: string[]

    partOf?: string | null // ID of another location this is physically a part of
    characteristics?: CodeableConcept[]
}
