// status: 'planned' | 'active' | 'completed'
import {CtxEncounter, EncounterCareTeam, EncounterLocation} from "../ctx-encounter";

export function getActiveCareTeams(encounter: CtxEncounter, options: {includeInactive?: boolean} = {}): EncounterCareTeam[] {
  if (options.includeInactive) return encounter.careTeams

  return encounter.careTeams.filter(team =>
    team.status === 'active' ||
    team.status === 'planned'
  )
}

// export type LocationStatus = 'planned' | 'confirmed' | 'active' | 'reserved' | 'completed' | 'leaving' | 'canceled'
export function getActiveLocations(encounter: CtxEncounter, options: {includeInactive?: boolean} = {}): EncounterLocation[] {
  if (options.includeInactive) return encounter.locations

  return encounter.locations.filter(loc =>
    loc.status === 'active' ||
    loc.status === 'planned' ||
    loc.status === 'confirmed' ||
    loc.status === 'reserved' ||
    loc.status === 'leaving'
  )
}
