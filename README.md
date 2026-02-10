# A La Pierre - Restaurant Management System

A full-stack restaurant management backend built with Node.js, Express, and MongoDB, designed for a modern Italian restaurant.  
This project powers authentication, menu management, reservations, contact messages, and admin moderation.

---

## Features

### Authentication & Roles
- User registration & login (JWT-based)
- Role-based access (`user`, `admin`)
- Protected routes
- Admin-only dashboard features

---

### Menu Management
- Categories (Create / View)
- Menu items with:
  - Name
  - Description
  - Price
  - Image URL
  - Category reference
- Admin-only create/update/delete

---

### Reservations
- Users can reserve tables
- Time validation (only **10:00 – 24:00**)
- Prevents double booking for the same time slot
- Users can:
  - View **their own reservations**
  - Delete **only their reservations**
- Admin can view all reservations

---

### Contact Messages
- Contact form connected to MongoDB
- Stores:
  - Name
  - Email
  - Subject
  - Message
  - Status (`unread`, `read`)
- Admin dashboard:
  - View recent messages
  - Mark as read
  - Delete responded messages

---

### Admin Dashboard
- Create categories
- Add menu items
- View & manage messages
- Role-protected access

---

## Tech Stack

| Layer | Technology |
|------|------------|
| Backend | Node.js, Express |
| Database | MongoDB + Mongoose |
| Auth | JWT |
| Frontend | HTML, CSS, Bootstrap |
| API Style | REST |
| Tools | Postman, MongoDB Compass |

---

##  Project Structure

```
BACKEND_FINAL/
├── config/ # DB connection
├── controllers/ # Business logic
├── middleware/ # Auth, role, error handlers
├── models/ # Mongoose schemas
├── routes/ # API routes
├── public/ # Frontend (HTML/CSS/JS)
├── app.js # Express app
├── server.js # Server entry point
├── package.json
└── README.md
```


---

## Environment Variables

Create a `.env` file in the root:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```


---

## Run Locally

```
npm install
npm run dev

```

Server runs on:

```
http://localhost:5000
```

## API Base Routes
Route	Description:
```
/api/auth	Auth (login/register)
/api/categories	Categories
/api/menu	Menu items
/api/reservations	Reservations
/api/messages	Contact messages
```
### Roles Summary
```
Role	Permissions
User	Browse menu, make reservations, send messages
Admin	Full CRUD, dashboard access
```
## Testing
```
API tested using Postman

Database inspected via MongoDB Compass
```
### Notes
```
.env and node_modules are ignored via .gitignore

JWT stored in localStorage on frontend

Admin UI is hidden for non-admin users
```

## Author

## Amangeldi Alisher
## Astana IT University
## Final Backend Project


