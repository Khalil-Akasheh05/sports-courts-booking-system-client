# Sports Courts Booking System Frontend (React)

This is the frontend for a sports courts booking system built with **React + Vite**.

## Description

This app allows two types of users:

- **Regular Users**:
  - View sports along with their courts.
  - Book courts.
  - Manage their bookings.
- **Admins**:
  - View dahsbaord overview.
  - Add sports.
  - Add courts.
  - View bookings.

Login and signup are included with role-based access control. Data is stored in the database using PostgreSQL.

## User requirements

1. **Log in** using email and password, or **Sign Up** using full name, email, and password.
2. On sign up, the default role is `User`.
3. **Admin** users:
   - View dasboard overview.
   - View sports along with their courts.
   - Add sports.
   - Delete sports.
   - Add courts.
   - Update court's price.
   - Disable courts.
   - Enable courts.
   - Delete courts.
   - View bookings.
4. **Regular** users:
   - View sports along with their courts.
   - Book courts.
   - View their bookings.
   - Update their booking date and time.
   - Delete bookings.
   - Receive notification via email when a booking is created.
5. The app remembers login sessions using `localStorage`.

## Technologies

- React 19
- Vite
- React Router DOM
- Axios
- LocalStorage
- React Bootstrap
- EmailJS (for email notifications)

## Getting Started

```bash
cd sports-courts-booking-system-client
npm install
npm run dev
```