## Useful commands
### alembic:
```bash
alembic init -t async migrations # init alembic

alembic revision --autogenerate -m "init" # generate migration

alembic upgrade head # apply migration
```
NOTE: if for some reason generating migration doesn't work, try running application before.

### docker:
```bash
$ docker-compose down -v
$ docker-compose up -d --build
```
