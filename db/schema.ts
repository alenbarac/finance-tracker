import { pgTable, text } from 'drizzle-orm/pg-core'

export const acounts = pgTable('acounts', {
  id: text('id').primaryKey(),
  plaidId: text('plaid_id'),
  name: text('name').notNull(),
  userId: text('user_id').notNull(),
})
