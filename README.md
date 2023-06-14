# 2211-wns-neumann-pawn-balls

# Start project:

This project uses pnpm.
To start the project with docker: pnpm start

# Stack and dependencies


# Docker

create containers: docker compose up
force a change inside containers: docker compose up --build

There are 3 containers: Front, Back, and Database.
As well as specific containers for integration and e2e tests 

# Eslint:
need to be fixed in front... Until this, "pnpm run lint" in ./client to apply linter rules.
Also, @typescript-eslint/dot-notation is throwing errors, but onlysometimes and i didn't do anything but right now the error is gone so i'm crying :)