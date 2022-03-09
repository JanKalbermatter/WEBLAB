import { QUEUE_TYPE } from "./queueTypes";

export interface Ranked {
    type: QUEUE_TYPE
    tier: string
    rank: string
    lp: number
    wins: number
    losses: number
    hotStreak: boolean
    veteran: boolean
}