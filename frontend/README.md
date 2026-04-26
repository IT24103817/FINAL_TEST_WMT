# Frontend - Item Manager Lab Test

## Setup
1. Open a terminal inside the frontend folder.
2. Run:
   ```bash
   cmd /c npm i
   ```
3. Copy `.env.example` to `.env`
4. Start the frontend:
   ```bash
   cmd /c npm run dev
   ```

## Notes
- The frontend expects the backend API at `VITE_API_URL`.
- Example:
  `VITE_API_URL=http://localhost:5000/api`
- Add/Edit item forms include required `stockQuantity` input.
