import assert from "node:assert";
import test from "node:test";
import { addUser, createUserTable, getUserCount } from "./lib/database.js";

test("that INSERT added 1 row", async () => {
  await createUserTable();
  const before = await getUserCount();
  await addUser();
  const after = await getUserCount();
  assert.strictEqual(before + 1, after);
});
