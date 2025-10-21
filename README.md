# HireRadar - Job Tracking Frontend

A simple React frontend for tracking job applications, built with Vite and Tailwind CSS.

## Features

- Dashboard with job listings
- Add new jobs with title, company, and URL
- Basic routing (Dashboard and Login pages)
- API integration ready for backend
- Responsive design with Tailwind CSS

## Development

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update `.env` with your API Gateway URL:
```
VITE_API_URL=https://your-api-gateway-url.amazonaws.com/prod
```

4. Start development server:
```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## AWS Amplify Deployment

1. Push code to GitHub repository
2. In AWS Amplify Console:
   - Connect your GitHub repository
   - Amplify will auto-detect React/Vite settings
   - Build settings should be:
     - Build command: `npm run build`
     - Output directory: `dist`
   - Add environment variable: `VITE_API_URL`
3. Deploy and get your live URL

## Project Structure

```
src/
├── components/
│   ├── JobForm.jsx      # Form to add new jobs
│   └── JobList.jsx      # Display list of jobs
├── pages/
│   ├── Dashboard.jsx    # Main dashboard page
│   └── Login.jsx        # Login page
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
├── api.js               # API service functions
└── index.css            # Tailwind CSS imports
```