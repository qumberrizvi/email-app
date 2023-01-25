# email-app

## Requirements

- Docker
- Docker Compose
- PHP 8.0.2 or higher
- Composer 2

## Installation

`cd` into the project folder and run

```shell
composer install
npm install
```

### Configure the app.

Create .env
```shell
cp .env.example .env
```
Note: .env example is already configured, so no need to change anything

### Migration

I've configured the database to be SQLite, so no need of a MySQL server.
Just run the following
```shell
php artisan migrate
```

Shell will prompt you to create a `database.sqlite`. Type `yes` and press <kbd>Enter ⏎</kbd>

### Seeding

Run the following to seed
```shell
php artisan db:seed
```
The seeder inserts 3 lacs users, so it can take a few minutes.

### Start the apps

Start Laravel, Redis, Mailhog by running 

```shell
./vendor/bin/sail up
```

In a new Terminal, start the frontend React app by running

```shell
npm run dev
```

In another terminal, run the following to listen to the queue inside the Docker container
```shell
docker exec -t email-app-laravel.test-1 php artisan queue:listen
```

Browse to the following URLs:
- Laravel app - http://localhost/
- Mailhog WebUI - http://localhost:8025/

## Working

In Laravel app, click on the blue `Send mails` button. 
It should start sending mails immediately.
Visit the Mailhog tab, and you should be able to see the mails being sent.

