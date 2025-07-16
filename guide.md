## Step 1: Environment Setup
- [ ] Create new Next.js project (npx create-next-app@latest company-blog) ( Typescript "yes" , ESLINT "no" , tailwind "yes" , ....)
- [ ] Set up project structure (components, pages, styles, lib folders)
- [ ] Set up Git repository and make initial commit ( setup github create account lamakanch 3ndk  o install git  or github desktop for simpler use )
- [ ] Create basic layout component (header, footer, navigation)

## Step 2: Home Page Development
- [ ] Design and build company homepage
- [ ] Add hero section with company branding
- [ ] Create "Latest Blog Posts" preview section (use dummy data)
- [ ] Add company intro/about section
- [ ] Create contact information section
- [ ] Test navigation and basic functionality

## Step 3: Prisma Installation & Setup
- [ ] Install Prisma CLI and client (npm install prisma @prisma/client)
- [ ] Initialize Prisma (npx prisma init --datasource-provider sqlite)
- [ ] Create basic Prisma schema (Post, Category models)
- [ ] Set up SQLite database connection in schema.prisma
- [ ] Generate Prisma client

## Step 4: Database Schema & Seeds
- [ ] Run first database migration (npx prisma migrate dev)
- [ ] Create seed script with sample furniture blog posts
- [ ] Run seed script to populate database
- [ ] Test basic CRUD operations ( just simple todo list testi biha wach dakchi khedam ) once i khdem dakchi go next step  
- [ ] Build simple form to add new blog posts ( simple table f database  "title" "body" for now ) ( we will see advanced after )
- [ ] Create delete functionality using Prisma delete

## Step 5: Blog Pages Development
- [ ] Create blog listing page (/blog) using Prisma to fetch posts ( Rakkaz 3la concept ta3 server side rendering  is the key )
- [ ] Implement dynamic routing for individual posts (/blog/[slug])
- [ ] Add pagination for blog listing using Prisma skip/take
- [ ] Create category filtering using Prisma where clauses

## Step 6: Content Display & Features
- [ ] Add social media sharing buttons
- [ ] Create related posts section using Prisma queries  ( khali hadi last ) 
- [ ] Add reading time estimation ( good for logic training )
- [ ] Style blog posts with proper typography
- [ ] Search 
## Step 7: Simple Admin Dashboard
- [ ] Create basic admin page (no authentication yet) ( yes matdkhlch rasek f auth for now focus on implementing function hiya lowla then we start RBAC (Role based access Control)
- [ ] Connect form to API routes using Prisma create
- [ ] Add basic edit functionality using Prisma update
- [ ] Add archived/published status field

## Advanced Features (Optional):
- [ ] Add image upload functionality
- [ ] Implement basic authentication for admin
- [ ] Add more complex Prisma relations
- [ ] Create admin user management
- [ ] Add blog post comments system

## Key Prisma Commands to Learn:
- [ ] npx prisma generate - Generate Prisma client
- [ ] npx prisma migrate dev - Create and apply migrations
- [ ] npx prisma studio - Open database browser
- [ ] npx prisma db seed - Run seed script