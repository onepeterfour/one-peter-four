# One Peter Four

This project holds the front-end source code for the [One Peter Four](https://1peter4.co.uk) website. Additionally it holds the schema definitions for the [Sanity CMS](https://www.sanity.io/) backend which is being served from the [/studio](</app/(sanity)/studio/[[...index]]/page.tsx>) route as an [embedded](https://www.sanity.io/docs/embedding-sanity-studio#ea0d0f43a252) experience.

1. Create a new `.env.local` file at project root and populate the environment variables as outlined in the .env.local.example file.
2. To local host the front end, issue `npm run dev` from project root.
3. To visit the embedded Sanity CMS studio, visit `/studio` in your browser and follow the instructions to login.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`NEXT_PUBLIC_SANITY_PROJECT_ID`

`NEXT_PUBLIC_SANITY_DATASET`

`NEXT_PUBLIC_SANITY_API_VERSION`

`NEXT_PUBLIC_SANITY_GRAPHQL_URL`

`SANITY_API_READ_TOKEN`

`RESEND_API_KEY`

`RESEND_SEND_FROM_EMAIL`

`RESEND_SEND_TO_EMAIL`

`RESEND_AUDIENCE_ID`

## Run Locally

Clone the project

```bash
  git clone https://github.com/onepeterfour/one-peter-four.git
```

Go to the project directory

```bash
  cd one-peter-four
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
# If you are storing your secrets as plain text within a .env.local file you can use:
  npm run dev

# If you are using 1Password to store your secrets with the 1Password vscode extension in conjunction with the 1Password CLI, you can use:
  npm run dev:op
```

In order to access the Sanity CMS UI which is served on the `/studio` route, you must be authorised by the project admin

## Deployment

This project is being auto-deployed via [Vercel](https://vercel.com) upon a successful merge of any feature branch into the main branch.

## Tech Stack

**Client:** [NextJS](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), [Resend](https://github.com/resendlabs/resend-node#readme), [Framer-Motion](https://github.com/framer/motion#readme), [Headless-UI](https://github.com/tailwindlabs/headlessui#readme)

**Server:** [SanityCMS](https://www.sanity.io/)

**Code Quality** [ESLint](https://eslint.org), [Prettier](https://prettier.io), [Gitmoji](https://github.com/carloscuesta/gitmoji-cli#readme), [Husky](https://github.com/typicode/husky#readme), [Lint-Staged](https://github.com/lint-staged/lint-staged#readme), [TypeScript](https://www.typescriptlang.org/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@sun33t](https://www.github.com/sun33t)
