# GreenConnect

A community platform for exploring plantation locations, matching sites to suitable trees, and tracking community planting drives.

## Setup

1. Install the frontend dependencies from the project root:
   ```bash
   npm install
   ```
2. Install backend dependencies:
   ```bash
   npm --prefix backend install
   ```
3. Create `backend/.env` with a MongoDB connection string:
   ```text
   MONGO_URI=your_mongodb_connection_string
   ```
   Keep this file private; it is excluded by `.gitignore`.
4. Start the backend and frontend in separate terminals:
   ```bash
   npm --prefix backend run start
   npm run dev
   ```
   The API runs at `http://localhost:5000` and Vite normally runs at `http://localhost:5173`.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About GreenConnect |
| `/explore` | Search locations and explore them on the map |
| `/find-tree` | Five-step tree recommendation flow using the live tree API |
| `/tree/:id` | Tree details loaded from the API |
| `/suggest-location` | Save and review location suggestions in this browser |
| `/community` | Community drives and their reported impact |
| `/contact` | Contact form demo; messages are not sent because no delivery service is configured |

## Tree recommendations

The five-step recommendation flow uses the live `GET /api/trees` response and scores trees against the site's available area, sunlight, water, and purpose.

- Space: good match = +30, partial match (at least 70% of minimum space) = +15
- Sunlight: exact match = +25, adjacent level = +15
- Water: exact match = +20, adjacent level = +10
- Purpose: match = +25

The tree details page requests `GET /api/trees/:id`.

## Checks

```bash
npm run build
npm --prefix backend test
```
