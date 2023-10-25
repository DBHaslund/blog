
## Blog project

```
Built as a docker container, running wordpress as the backend, 
mariadb and react/nextjs frontend.
```

## How to run (doesn't work currently)

```
git clone https://github.com/DBHaslund/blog.git
cd .\blog\
docker-compose up

When it's done, you should see 
frontend  |   ▲ Next.js 13.5.4
frontend  |   - Local:        http://localhost:3000
frontend  |   - Environments: .env
frontend  |   - Experiments (use at your own risk):
frontend  |      · serverActions

You can now access the site through the local link above, or 
the backend through http://localhost/wp-admin/
User: admin
Password: admin
```