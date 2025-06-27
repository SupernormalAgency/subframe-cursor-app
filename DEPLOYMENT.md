# Vercel Deployment Guide

This guide will help you deploy your Subframe Cursor App to Vercel with automated CI/CD.

## Prerequisites

- A GitHub account
- A Vercel account (free tier available)
- Your project pushed to a GitHub repository

## Step 1: Connect Your Repository to Vercel

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your Project**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Project Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Step 2: Set Up GitHub Secrets

For automated deployments, you need to add these secrets to your GitHub repository:

1. **Go to your GitHub repository**
   - Navigate to Settings → Secrets and variables → Actions

2. **Add the following secrets:**
   ```
   VERCEL_TOKEN
   VERCEL_ORG_ID
   VERCEL_PROJECT_ID
   ```

### How to get these values:

#### VERCEL_TOKEN
1. Go to Vercel Dashboard → Settings → Tokens
2. Create a new token with appropriate permissions
3. Copy the token value

#### VERCEL_ORG_ID and VERCEL_PROJECT_ID
1. Run `vercel link` in your project directory
2. This will create a `.vercel/project.json` file
3. Extract the values from this file:
   ```json
   {
     "orgId": "your-org-id",
     "projectId": "your-project-id"
   }
   ```

## Step 3: Deploy

### Option A: Manual Deployment
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to production
npm run deploy

# Deploy preview
npm run deploy:preview
```

### Option B: Automated Deployment (Recommended)
1. Push your code to the `main` or `master` branch
2. GitHub Actions will automatically:
   - Run linting
   - Build the application
   - Deploy to Vercel

## Step 4: Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Domains
   - Add your custom domain

2. **Configure DNS**
   - Follow Vercel's DNS configuration instructions
   - Update your domain's nameservers or add DNS records

## Environment Variables

If your app uses environment variables:

1. **Add them in Vercel Dashboard**
   - Go to your project settings
   - Navigate to Environment Variables
   - Add your variables

2. **Or use a `.env` file**
   - Create `.env.local` for local development
   - Add `.env.local` to `.gitignore`

## Deployment Configuration

The project includes:

- **`vercel.json`**: Optimized configuration for Vite apps
- **`.github/workflows/deploy.yml`**: Automated CI/CD pipeline
- **Security headers**: XSS protection, content type options
- **Asset caching**: Optimized caching for static assets
- **SPA routing**: Proper handling of React Router

## Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation

2. **Environment Variables**
   - Make sure all required env vars are set in Vercel
   - Check for typos in variable names

3. **Routing Issues**
   - The `vercel.json` includes SPA routing configuration
   - All routes should redirect to `index.html`

### Performance Optimization:

- Assets are automatically optimized by Vercel
- Static assets are cached with long-term headers
- The build process includes TypeScript compilation

## Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Function Logs**: Serverless function execution logs
- **Real-time Metrics**: Response times, error rates

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions) 