import { User } from "./user"

export interface Tournament {
    Id: string
    start: number
    end: number
    name: String
    Location: Location
    City: String
    Country: String
    OwnerId: number
    Owner: User
    Status: String
    Description: String
}

export interface getAllTournamentsDto {
    getAllTournaments: Tournament[]
}