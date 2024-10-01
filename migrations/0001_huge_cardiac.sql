CREATE TABLE IF NOT EXISTS "member_transaction" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "member_transaction_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"member_id" integer NOT NULL,
	"password" numeric(100, 2),
	"status" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now()
);
