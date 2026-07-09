# Flyterial Documentation: Backend Architecture

The backend of Flyterial is built entirely within the **Next.js App Router** leveraging serverless API routes. This eliminates the need for a separate backend service like Express or NestJS.

## Technology Stack
- **Framework:** Next.js (Node.js edge/serverless runtimes)
- **AI SDK:** `@google/genai` (Google Gemini integration)

## Core Endpoints

### `POST /api/generate`
This is the primary engine of the application. 

**Request Payload:**
```json
{
  "subject": "String (Required)",
  "level": "String (e.g., 'highschool')",
  "preset": "String (e.g., 'lesson-quiz')",
  "context": "String (Optional)"
}
```

**Process Flow:**
1. **Validation & Mocking:** The route checks for the existence of `GEMINI_API_KEY`. If it is absent, the backend safely simulates a network delay and returns mock markdown data. This ensures the frontend UI can be tested without an active API subscription.
2. **Prompt Construction:** The route maps the selected `preset` to a natural language structural requirement. It builds a rigorous prompt instructing the AI to act as an instructional designer.
3. **AI Invocation:** The prompt is sent to the `gemini-2.5-flash` model. Crucially, the request is configured with `responseMimeType: 'application/json'` to guarantee structured output.
4. **Response Parsing:** The resulting JSON text is parsed and returned to the client.

**Response Structure:**
```json
{
  "documents": [
    {
      "title": "String",
      "content": "Markdown String"
    }
  ]
}
```

## Environment Variables
- `GEMINI_API_KEY`: Must be set in `.env.local` for production AI generation. If omitted, the app runs in mock mode.
