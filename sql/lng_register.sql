
CREATE TABLE "public"."lng_register" (
"id" SERIAL PRIMARY KEY,
"lng_name" varchar(255) NOT NULL,
"district" varchar(255) NOT NULL,
"address" varchar(255) NOT NULL,
"coords" varchar(100) NOT NULL,
"mobile" varchar(20) NOT NULL,
"pic" varchar(255) NOT NULL,
"linker" varchar(50),
"linker_mobile" varchar(20),
"referee" varchar(50),
"referee_mobile" varchar(20),
"swiping" char(1),
"facilities" varchar(255),
"lng_type" varchar(50),
"investors" varchar(50)
)

;
COMMENT ON COLUMN "public"."lng_register"."referee" IS '推荐人';
COMMENT ON COLUMN "public"."lng_register"."facilities" IS '配套设置';
COMMENT ON COLUMN "public"."lng_register"."lng_type" IS '加气站类型';
COMMENT ON COLUMN "public"."lng_register"."investors" IS '投资方';