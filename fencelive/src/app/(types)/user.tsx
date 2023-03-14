import { Tournament } from "./tournament"

export interface User {
    Id: String
    Email: String
    BornIn: String
    UserName: String
    FirstName: String
    LastName: String
    ParticipatingTournamentsIds: String[]
    ParticipatingTournaments: Tournament
    LikedTournamentsIds: String[]
    LikedTournaments: Tournament[]
    FollowingUserIds: String[]
    Following: User[]
    FollowersUserIds: String[]
    Followers: User[]
    Nationality: String
}