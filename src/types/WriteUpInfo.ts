export type ChalCat = 'crypto' | 'forens' | 'pwn' | 'misc' | 'web' | 'rev'

export type Team = 'TOP PROGRAMMER 2005 DATABASE MAESTRO' | 'CIPHER KING' | 'slight_smile' | 'Solo'

export type WriteUpInfo = {
  ctf: string
  title: string
  description: string
  awards?: string
  team: Team
  cats: ChalCat[]
  numSolves: number
  numPoints: number
  attachments: { name: string; url: string }[]
  sourceUrl: string
  datePosted: string
  lastUpdated: string
}
