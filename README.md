# Test repo for GitHub app

This is a Node.js app that includes a simple `npm run test` that:

- Expects to find a Postgres connection string in `DATABASE_URL` env.
- Creates a `users` table if it does not exist.
- Confirms an `INSERT` increases the table's row count.

## How might a customer use this?

This repo contains a `.github/workflows` file to demo running a test against the newly created Neon branch when a pull request is created.

We expect to see the test row inserted into the newly created Neon branch (not Neon primary branch) when the workflow is run.

The PR should not complete if the test fails.

## Expected user experience

### Adding the GitHub integration

- From the Neon console, I add the GitHub integration to my Neon project and select this as the connected repo.
- In this repo, I will find the GitHub integration has created a `main` environment. <img src="/images/main-environment-created.png" />
- The `main` environment contains a `DATABASE_URL` and a `DATABASE_URL_UNPOOOLED` variable for my Neon primary branch. <img src="/images/main-var-created.png" />

### Creating a new git branch

- When a new git branch is created, the GitHub integration does the following.
  - Creates a new **Neon branch** that reflects the name of the git branch.
  - Creates a new GitHub environment that reflects the name of the git branch.
  - The new GitHub environment contains `DATABASE_URL` and `DATABASE_URL_UNPOOLED` variables for the new Neon branch.

### Merging a PR/deleting a git branch

- When a new git branch is delted (e.g. on PR merge), the GitHub integration does the following.
  - Deletes thew **Neon branch** associuated with the git branch.
  - Deltes the GitHub environment and its variables associated with the deleted branch

### Changing the Neon primary branch

- If the Neon primary branch is changed, the `DATABASE_URL` and `DATABASE_URL_UNPOOLED` variables in the `main` environment will be updated.
