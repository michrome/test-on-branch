import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function addUser() {
  await sql`
    INSERT INTO users ("name")
      VALUES ('mike')`;
}

export async function createUserTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name text)`;
}

export async function getUserCount() {
  const result = await sql`
    SELECT
      count(*)::int AS user_count
    FROM
      users`;
  return result[0].user_count;
}
