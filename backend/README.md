# Backend - Item Manager Lab Test

## Setup
1. Open a terminal inside the backend folder.
2. Run:
   ```bash
   cmd /c npm i
   ```
3. Copy `.env.example` to `.env`
4. Update `MONGO_URI` if needed.
5. Start the server:
   ```bash
   cmd /c npm run dev
   ```

## API Endpoints
- `GET /api/items`
- `GET /api/items/:id`
- `POST /api/items`
- `PUT /api/items/:id`
- `DELETE /api/items/:id`

## Item Payload
- Required fields: `name`, `category`, `price`, `stockQuantity`, `description`
- Optional field: `imageUrl`

