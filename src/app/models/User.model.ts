export interface User {
  id: string
  email: string
  username: string
  profile: Profile
  roles: string[]
}

export interface Profile {
  name: string
  company: string
  dob: string
  address: string
  location: Location
}

export interface Location {
  lat: number
  long: number
}