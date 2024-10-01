import { boolean, integer, numeric, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const memberTransactionModel = pgTable('member_transaction', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  member_id: integer('member_id').notNull(),
  amount: numeric('password', { precision: 100, scale: 2 }),
  status: boolean('status').default(false).notNull(),
  created_at: timestamp('created_at').defaultNow()
})
