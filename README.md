# Next.js Static App

A modern static Next.js application configured for deployment to GitHub Pages or AWS S3.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Radix UI Themes** - Modern, accessible component library
- **Radix Icons** - High-quality icon set
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Performant form management
- **Zod** - Schema validation
- **Yarn** - Fast, reliable package manager

## Getting Started

### Development

Install dependencies:
```bash
yarn install
```

Run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Build

Generate static files for production:
```bash
yarn build
```

Static files will be created in the `out` directory.

## Deployment

### GitHub Pages

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages.

**To enable GitHub Pages:**

1. Go to your repository settings on GitHub
2. Navigate to **Pages** (under "Code and automation")
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Push to the `main` branch to trigger deployment
5. Your site will be available at `https://<username>.github.io/<repository>/`

**Note:** If deploying to a repository page (not a user/org page), you may need to set the `basePath` in `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: {
    unoptimized: true,
  },
};
```

### AWS S3

1. Build the project:
   ```bash
   yarn build
   ```

2. Upload the contents of the `out` directory to your S3 bucket:
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. Configure your S3 bucket for static website hosting:
   - Enable static website hosting in bucket settings
   - Set `index.html` as the index document
   - Set `404.html` as the error document
   - Configure bucket policy for public read access

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with Radix Theme provider
│   ├── page.tsx        # Home page with demo form
│   └── globals.css     # Global styles with Tailwind & Radix
├── public/             # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment workflow
└── next.config.ts      # Next.js configuration (static export)
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Radix UI Themes](https://www.radix-ui.com/themes/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
