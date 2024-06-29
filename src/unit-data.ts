// export const OrganizationalTeamCode: Coding = {
//   system: 'http://terminology.hl7.org/CodeSystem/organization-type',
//   code: 'team',
//   display: 'Organizational team'
// }

export interface ServiceTeam {
  identifier: string,
  name: string,
  color: string,
  practitioners: {
    identifier: string,
    label: string,
  }[]
}

export interface UnitData {
  name: string,
  identifier: string,
  locations: {
    identifier: string,
    name: string
  }[],
  externalLocations: {
    identifier: string,
    name: string
  }[],
  lists: {
    identifier: string,
  }[],
  serviceTeams: ServiceTeam[],
}
