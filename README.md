# Test repo for GitHub app

This is a Node.js app that icludes a simple `npm run test` that:

- Expects to find a Postgres connection string in `DATABASE_URL` env.
- Creates a `users` table if it does not exist.
- Confirms an `INSERT` increases the table's row count.

## Expected user experience

### Adding the GitHub integration

- From the Neon console, I add the GitHub integration to my Neon project and select this as the connected repo.
- In this repo, I will find the GitHub integration has created a `main` environment that contains a `DATABASE_URL` variable for my Neon primary branch.

<img src="/images/main-environment-created.png" />

<img src="/images/main-var-created.png" />
