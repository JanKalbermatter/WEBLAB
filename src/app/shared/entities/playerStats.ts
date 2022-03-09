export interface PlayerStats {
    puuid: string
    position: string
    profileIcon: string
    level: number
    championId: number
    championName: string
    stats: Stats
    items: number[]
    trinket: number
    totalMinionsKilled: number,
    pills: string[]
}

interface Stats {
    kills: number
    assists: number
    deaths: number
    kda: number
    killingSprees: number
    pentaKills: number
    quadraKills: number
    tripleKills: number
    doubleKills: number
}
