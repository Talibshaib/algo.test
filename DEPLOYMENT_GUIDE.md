# AlgoZ Deployment Guide

This guide will walk you through deploying your AlgoZ project on Vercel. We'll cover both the frontend (Next.js) and backend (Express) components.

## Prerequisites

- A [Vercel](https://vercel.com) account
- A [GitHub](https://github.com) account
- Your AlgoZ project pushed to a GitHub repository

## Step 1: Prepare Your Frontend for Deployment

### 1.1 Configure Environment Variables

Create a `.env.local` file in your frontend directory if it doesn't exist already:

```
# algo_frontend/.env.local
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app/api/v1
```

For development, you can keep using `http://localhost:8000/api/v1` as the fallback.

### 1.2 Update Next.js Configuration

Your current `next.config.mjs` has `output: 'export'` which generates static HTML exports. For a full-stack application with API routes, you should remove this line unless you specifically need static export.

Update your `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the 'output: export' line for dynamic applications
  // Add any other necessary configuration
};

export default nextConfig;
```

### 1.3 Add a Build Script

Your `package.json` already has the necessary build script (`"build": "next build"`), which Vercel will use automatically.

## Step 2: Prepare Your Backend for Deployment

### 2.1 Update Backend Package.json

Add a build and start script to your backend's `package.json`:

```json
"scripts": {
  "dev": "nodemon --experimental-json-modules src/index.js",
  "build": "echo 'Build completed'",
  "start": "node --experimental-json-modules src/index.js"
}
```

### 2.2 Configure Environment Variables for Production

You'll need to set up the same environment variables from your `.env` file in Vercel. Do not commit your `.env` file to GitHub.

### 2.3 Update CORS Configuration

Update your CORS configuration in `app.js` to accept requests from your deployed frontend:

```javascript
app.use(cors({
    origin: process.env.CORS_ORIGIN || "https://your-frontend-url.vercel.app",
    credentials: true
}))
```

### 2.4 Handle Admin Authentication Securely

Your current admin authentication uses hardcoded credentials and a test token. For production, consider implementing a more secure authentication method.

## Step 3: Deploy Your Frontend to Vercel

1. Push your code to GitHub if you haven't already
2. Log in to [Vercel](https://vercel.com)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: `algo_frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Add environment variables:
   - Add `NEXT_PUBLIC_API_URL` with your backend URL
7. Click "Deploy"

## Step 4: Deploy Your Backend to Vercel

Vercel is primarily designed for frontend applications, but you have two options for your backend:

### Option 1: Deploy as a Separate Service

1. Create a new project in Vercel
2. Import your GitHub repository
3. Configure the project:
   - Framework Preset: Other
   - Root Directory: `algo_backend`
   - Build Command: `npm run build`
   - Output Directory: `public`
4. Add all environment variables from your `.env` file
5. Click "Deploy"

### Option 2: Use a Different Hosting Provider

Alternatively, you can deploy your backend to a platform better suited for Node.js applications:

- [Render](https://render.com)
- [Railway](https://railway.app)
- [Heroku](https://heroku.com)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## Step 5: Connect Your Database

Your backend uses MongoDB. Make sure your MongoDB Atlas cluster:

1. Has network access rules that allow connections from Vercel's IP addresses
2. Has a database user with appropriate permissions
3. Has the connection string properly set in your environment variables

## Step 6: Test Your Deployment

1. Visit your deployed frontend URL
2. Test user authentication
3. Test admin functionality
4. Check that all API calls are working correctly

## Troubleshooting

### CORS Issues

If you encounter CORS errors:

1. Verify your CORS configuration in the backend
2. Ensure the frontend is using the correct API URL
3. Check that credentials are being properly included in requests

### Authentication Problems

If authentication isn't working:

1. Verify that cookies are being properly set and sent
2. Check that your JWT secrets are properly configured
3. Ensure your frontend is correctly storing and using authentication tokens

### Database Connection Issues

If your application can't connect to the database:

1. Verify your MongoDB connection string
2. Check network access rules in MongoDB Atlas
3. Ensure your database user has the correct permissions

## Security Considerations

1. Replace the hardcoded admin credentials and test token with a proper authentication system
2. Ensure all environment variables are properly set in Vercel and not committed to GitHub
3. Consider implementing rate limiting for your API endpoints
4. Review your JWT implementation for security best practices

Congratulations! Your AlgoZ application should now be deployed and accessible online.