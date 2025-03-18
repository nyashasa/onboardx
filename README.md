# OnboardX - Unified Client Onboarding Platform

OnboardX is a no-code, multi-domain onboarding platform with a focus on real-time collaboration, AI-driven workflow automation, and unified client/partner portals. The platform is designed to streamline the onboarding process for employees, partners, and customers.

## Features

- **Unified Portals & Workspaces**: Client Portal for onboardees and Team Workspace for internal users
- **No-Code Workflow Builder**: Intuitive drag-and-drop interface to create onboarding processes
- **AI Copilot & Automation**: Document recognition, intelligent task routing, and chatbot guidance
- **Integrated Communication & Collaboration**: In-app chat, file sharing, and annotation
- **Comprehensive Compliance Tracking**: Audit trails, automatic escalations, and regulatory modules
- **Integration Library**: Connect with finance/banking, logistics, CRM/HRIS systems
- **Analytics & Dashboards**: Visualize and analyze onboarding metrics
- **Multi-Tenancy & White-Labeling**: Customizable branding and subdomains

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Shadcn UI (built on Radix + Tailwind CSS)
- **Backend**: Next.js API routes, Supabase (Postgres)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Realtime**: Supabase Realtime for notifications and live collaboration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database, auth, and storage)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/onboardx.git
   cd onboardx
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   - Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
onboardx/
├── app/                  # Next.js app directory (routes)
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── dashboard/        # Dashboard and app pages
│   ├── workflows/        # Workflow management
│   ├── onboardings/      # Onboarding processes
│   └── ...
├── components/           # React components
│   ├── ui/               # UI components (using shadcn/ui)
│   ├── shared/           # Shared components
│   └── ...
├── lib/                  # Utility functions and shared code
│   ├── supabase/         # Supabase client and helpers
│   ├── utils/            # Utility functions
│   └── ...
├── public/               # Static assets
└── ...
```

## Deployment

The application can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
