# Flyterial Documentation: Frontend Architecture

The frontend is built as a Single Page Application (SPA) experience using the **Next.js App Router**, leveraging modern React capabilities.

## Technology Stack
- **Framework:** Next.js (React)
- **Styling:** Custom Vanilla CSS Design System (`globals.css`)
- **Icons:** `lucide-react`
- **File Export:** `jszip` & `file-saver`

## Design System & Styling
As per core requirements, the application completely eschews utility-first CSS frameworks like Tailwind in favor of a handcrafted Vanilla CSS design system. 
- **Theming:** Relies heavily on CSS Custom Properties (`--primary`, `--background`, `--surface`) to manage themes and dark mode seamlessly via `@media (prefers-color-scheme: dark)`.
- **Aesthetics:** Utilizes "Glassmorphism" techniques (semi-transparent backgrounds with backdrop blur) and smooth gradients to establish a premium, modern feel.
- **Animations:** CSS keyframe animations (`.animate-spin`, `.animate-pulse`) are used for loading states to provide continuous feedback during AI generation.

## State Management
State is managed locally within React components using the `useState` hook.
- **Form State:** Manages input data (Subject, Level, Preset, Context).
- **Loading State:** Toggles the loading UI overlay.
- **Document State:** Holds the array of generated documents returned by the API. If this state is populated, the UI switches from the Generator Form to the Results Dashboard.
- **Active Document State:** Tracks which document is currently selected in the sidebar for viewing/editing.

## Key Components

### 1. The Generator Form (`page.tsx`)
A controlled form capturing the generation parameters. On submission, it triggers the API call and transitions the UI to a loading state.

### 2. The Results Dashboard (`page.tsx`)
Replaces the form once data is received. It features a sidebar listing all generated files, allowing the user to switch the active document.

### 3. The Markdown Editor (`Editor.tsx`)
An Obsidian-style text area component. It allows users to view and directly edit the raw Markdown output of the AI before downloading.

### 4. Zip Export Logic
The frontend uses `JSZip` to bundle the active document state into a single `.zip` file. It iterates over the `documents` array, creating a `.md` file for each entry, and triggers a browser download via `file-saver`.
