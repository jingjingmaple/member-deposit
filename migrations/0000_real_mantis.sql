CREATE TABLE IF NOT EXISTS "member" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "member_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"username" text NOT NULL,
	"password" varchar(256),
	"erp_member_key" varchar(256) NOT NULL,
	"status" boolean DEFAULT false NOT NULL,
	CONSTRAINT "member_username_unique" UNIQUE("username")
);
