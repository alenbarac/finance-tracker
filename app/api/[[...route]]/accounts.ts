import { Hono } from 'hono'
import { db } from '@/db/drizzle'
import { acounts } from '@/db/schema'

const app = new Hono().get('/', async (c) => {
  const data = await db
    .select({
      id: acounts.id,
      name: acounts.name,
    })
    .from(acounts)
  return c.json({ data })
})

export default app
