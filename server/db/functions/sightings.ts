import connection from '../connection.ts'
import { Sighting } from '../../../models/sightings.ts'

const db = connection

export async function getAllSightings(): Promise<Sighting[]> {
  return db('sightings').select()
}

export function getSightingById(id: number) {
  return db('sightings').select().where({ id })
}
