# 2211-wns-neumann-pawn-balls

npm start

yarn? npm? pnpm?

# Start project:

Docker compose up
  start DB, back and front in containers.

# Stack and dependencies


# Docker

create containers: docker compose up
force a change inside containers: docker compose up --build

There are 3 containers: Front, Back, and Database.

# Question pour pierre:
Comment on gere les volumes? (nomer volume, update upon docker compose up etc)
verifier le docker compose pour le back
healthcheck comment ca fonctionne?
construire une commande docker qui update le code dans les containers directement?
faire un container de dev?

-> verifier que le import fonctionne bien pour le front
-> probleme avec le test sur app dans le front (askip toBeInTheDocument existe pas mais j'arrive pas a import jest donc bon a voir)