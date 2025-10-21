# AWS Amplify Deployment Guide for HireRadar

## Prerequisites
- AWS Account (free tier eligible)
- GitHub account
- Git installed locally

## Step-by-Step Deployment

### 1. Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial HireRadar React app"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/hireradar.git

# Push to GitHub
git push -u origin main
```

### 2. AWS Amplify Setup

1. **Login to AWS Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "Get Started" under "Deploy"

2. **Connect Repository**
   - Select "GitHub" as source
   - Authorize AWS Amplify to access your GitHub
   - Select your HireRadar repository
   - Choose the `main` branch

3. **Configure Build Settings**
   - Amplify will auto-detect the React/Vite setup
   - Verify build settings:
     - Build command: `npm run build`
     - Output directory: `dist`
   - The `amplify.yml` file will be automatically used

4. **Environment Variables**
   - Click "Advanced settings"
   - Add environment variable:
     - Key: `VITE_API_URL`
     - Value: `https://your-api-gateway-url.amazonaws.com/prod`
   - (Replace with your actual API Gateway URL when ready)

5. **Deploy**
   - Click "Save and deploy"
   - Wait for build to complete (usually 2-3 minutes)
   - Get your live URL from the Amplify console

### 3. Free Tier Limits
- **Build minutes**: 1,000 minutes/month
- **Storage**: 15 GB
- **Data transfer**: 15 GB/month
- **Requests**: 15 GB served/month

### 4. Custom Domain (Optional)
- In Amplify console, go to "Domain management"
- Add your custom domain
- Follow DNS configuration steps

### 5. Continuous Deployment
- Any push to the `main` branch will trigger automatic deployment
- Monitor builds in the Amplify console

## Local Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## API Integration
When your backend API is ready:
1. Update the `VITE_API_URL` environment variable in Amplify
2. Ensure your API Gateway has CORS enabled for your Amplify domain
3. The app will automatically connect to your backend

## Troubleshooting
- **Build fails**: Check the build logs in Amplify console
- **API errors**: Verify CORS settings and API URL
- **Environment variables**: Ensure they're set in Amplify console, not just locally