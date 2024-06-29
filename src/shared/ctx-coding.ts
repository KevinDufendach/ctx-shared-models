export interface CtxCoding {
  system? : string, // Identity of the terminology system
  version? : string, // Version of the system - if relevant
  code? : string, // I Symbol in syntax defined by the system
  display? : string, // I Representation defined by the system
  userSelected? : boolean // If this coding was chosen directly by the user
}
