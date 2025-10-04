# subscription_exercise

A short technical exercise for Landing Pad Digital

candidate: maneechote@hotmail.com

## Installation

After clone this repository to your local, please run.

```bash
cd subscription_exercise
docker compose up -d
npm install

cp .env.example .env
npm run build
npm run dev
```

## How to run

1. A subscription POST

```bash
curl -X POST http://localhost:3009/api/subscription/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "email@example.com",
    "name": "myname",
    "plan": "Professional",
    "price": 1250
  }'
```
2. A GET endpoint to fetch all subscriptions

```bash
curl -X GET http://localhost:3009/api/subscription/list
```

## MariaDB

localhost on port 3307

## Troubleshoot

if you got the following error:
```
Error: listen EADDRINUSE: address already in use :::3009
```
try to change the PORT to the new one (such as 3010)

## Design choices

[ARCHITECTURE.md](ARCHITECTURE.md)

