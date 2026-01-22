# Digital TAU

Educational project Digital TAU - A starter project with Next.js, TypeScript, PostgreSQL, and Prisma ORM.

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **PostgreSQL 16** in Docker
- **Prisma ORM 7** with PostgreSQL adapter for database management
- **Tailwind CSS** for styling
- Multi-language support (RU/KK/EN)
- Media management (Images, YouTube videos, MP4 videos)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **Docker Desktop** - [Download Docker](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download Git](https://git-scm.com/downloads)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd repo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` if needed. Default values are already configured for local development.

### 4. Start PostgreSQL with Docker

```bash
docker-compose up -d
```

This will start PostgreSQL in a Docker container. The database will persist data in a Docker volume.

To check if the database is running:

```bash
docker-compose ps
```

### 5. Generate Prisma Client

```bash
npm run prisma:generate
```

### 6. Run Database Migrations

```bash
npm run prisma:migrate
```

This will create all necessary database tables based on the Prisma schema.

### 7. Seed the Database

```bash
npm run prisma:seed
```

This creates an initial admin user with the following credentials:
- **Email**: admin@digitaltau.local
- **Password**: admin123

⚠️ **Important**: Change these credentials in production!

### 8. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 9. Open Prisma Studio (Optional)

To visually explore and edit your database:

```bash
npm run prisma:studio
```

This will open Prisma Studio at [http://localhost:5555](http://localhost:5555).

## Database Schema

The project includes the following models:

### User
- Admin users with authentication
- Fields: id, email, password (hashed), name, role

### Project
- Main project entity
- Fields: id, slug, published status
- Relations: author (User), translations, media

### ProjectTranslation
- Multi-language support for projects
- Supported languages: Russian (RU), Kazakh (KK), English (EN)
- Fields: title, description, content

### Media
- Supports multiple media types:
  - IMAGE
  - VIDEO_YOUTUBE
  - VIDEO_MP4
- Fields: type, url, alt text, order

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:seed` - Seed the database
- `npm run prisma:studio` - Open Prisma Studio

## Docker Commands

- `docker compose up -d` - Start PostgreSQL in background
- `docker compose down` - Stop PostgreSQL
- `docker compose ps` - Check container status
- `docker compose logs db` - View database logs

## Project Structure

```
.
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── seed.ts           # Database seeding script
│   └── migrations/       # Migration files (auto-generated)
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── generated/        # Generated Prisma Client (auto-generated)
├── docker-compose.yml     # PostgreSQL configuration
├── .env                   # Environment variables (not committed)
├── .env.example          # Environment variables template
└── README.md             # This file
```

## Troubleshooting

### Database Connection Issues

If you can't connect to the database:

1. Make sure Docker is running
2. Check if the database container is up: `docker-compose ps`
3. Verify the DATABASE_URL in `.env` matches your Docker configuration
4. Restart the database: `docker-compose restart db`

### Port Conflicts

If port 5432 is already in use:

1. Stop other PostgreSQL instances
2. Or modify the port in `docker-compose.yml` and update `DATABASE_URL` in `.env`

### Migration Issues

If migrations fail:

1. Stop the dev server
2. Reset the database: `docker-compose down -v` (⚠️ this deletes all data)
3. Start fresh: `docker-compose up -d`
4. Run migrations again: `npm run prisma:migrate`

## Development Workflow

1. Make changes to your code
2. The Next.js dev server will automatically reload
3. For database schema changes:
   - Edit `prisma/schema.prisma`
   - Run `npm run prisma:migrate` to create a new migration
   - Run `npm run prisma:generate` to update the Prisma Client

## Production Deployment

Before deploying to production:

1. Change `NEXTAUTH_SECRET` to a strong random value
2. Update admin credentials (or create a new admin through the UI)
3. Use a managed PostgreSQL service (not Docker)
4. Set appropriate environment variables for production
5. Run `npm run build` to create a production build
6. Deploy using your preferred hosting service (Vercel, Railway, etc.)

## License

ISC

## Support

For issues and questions, please open an issue in the repository.
