# Flyterial - AI Educational Resource Generator

Flyterial is a stateless, SaaS-style web application designed to instantly generate comprehensive educational resources (lesson plans, quizzes, study guides) using AI.

## Documentation Overview

Detailed documentation for the project is separated into the following sections:

- 📖 [Application Purpose & Details](./docs/purpose.md)
- ⚖️ [Business Rules & Constraints](./docs/business-rules.md)
- ⚙️ [Backend Architecture](./docs/backend.md)
- 🎨 [Frontend Architecture](./docs/frontend.md)

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository and navigate into it.
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup
If you want to use the live Google Gemini AI, create a `.env.local` file in the root of the project:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```
*Note: If no API key is provided, the application will gracefully fall back to a mock generation mode, allowing you to test the UI and export flows without an active subscription.*

### Running the Application
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Technologies Used
- **Next.js** (App Router)
- **React**
- **Vanilla CSS** (Custom Premium Design System)
- **Google Gemini API** (`@google/genai`)
- **JSZip & FileSaver** (For bulk exporting)
