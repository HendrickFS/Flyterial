# Flyterial Documentation: Business Rules

## 1. Generation Constraints
- **Required Inputs:** A user must provide a "Subject / Topic" before generation can commence. 
- **Educational Levels:** Supported levels dictate the tone and complexity of the AI output. These are currently limited to:
  - Elementary School
  - High School
  - Undergraduate
- **Context:** Optional context can be provided by the user to focus the generation on specific areas (e.g., "Focus on cellular division").

## 2. Structural Presets
The system operates on "Presets," which dictate the quantity and type of documents generated in a single request. Current presets include:
- **lesson-quiz:** Generates exactly 1 Lesson Plan and 1 Quiz.
- **full-module:** Generates exactly 2 Lesson Plans, 2 Quizzes, and 1 Assignment.
- **study-guide:** Generates a Comprehensive Study Guide.

## 3. Stateless Data Handling
- **No Persistence:** Once generated, files exist only in the React state on the client side. If the page is refreshed or closed, the data is lost.
- **Error Handling:** If the AI provider fails to return a valid JSON structure, the system will alert the user and gracefully fail without crashing the UI.

## 4. Export Rules
- All exported files must be formatted as Markdown (`.md`).
- File names within the ZIP archive are derived from the AI-generated document titles.
- The parent ZIP file name is derived from the sanitized "Subject" input provided by the user (e.g., `cellular_biology_materials.zip`).
