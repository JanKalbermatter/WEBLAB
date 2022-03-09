export interface Match {
    metadata: MatchMetadata
    info: MatchInfo
}


interface MatchMetadata {
    dataVersion: string
    matchId: string
    participants: string[]
}

interface MatchInfo {
    gameCreation: number
    gameDuration: number
    gameStartTimestamp:number
    gameEndTimestamp: number
    gameId: number
    gameMode: string
    gameName: string
    gameType: string
    gameVersion: string
    mapId: number
    participants: object[]
    platformId: string
    queueId: number
    teams: MatchTeam[]
    tournamentCode: string
}

interface MatchTeam {
    bans: MatchBans[]
    objectives: MatchObjective[]
    teamId: number
    win: boolean
}

interface MatchBans {
    championId: number
    pickTurn: number
}

interface MatchObjective {
    baron: MatchObjectiveInfo
    champion: MatchObjectiveInfo
    dargon: MatchObjectiveInfo
    inhibitor: MatchObjectiveInfo
    riftHerald: MatchObjectiveInfo
    tower: MatchObjectiveInfo
}

interface MatchObjectiveInfo {
    first: boolean
    kills: number
}