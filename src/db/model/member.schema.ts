import { integer, text, boolean, pgTable, varchar } from "drizzle-orm/pg-core";

export const memberModel = pgTable("member", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  username: text("username").notNull().unique(),
  password: varchar('password', { length: 256 }),
  erp_member_key: varchar('erp_member_key', { length: 256 }).notNull(),
  status: boolean("status").default(false).notNull(),
});