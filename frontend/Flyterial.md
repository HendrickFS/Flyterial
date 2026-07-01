# Flyterial Project Documentation

## 1. Application Proposal
Flyterial is an AI-powered educational resource generator designed to assist educators, tutors, and instructional designers in creating structured teaching and assessment materials. By inputting specific parameters such as the learning subject, core content, student educational level (e.g., elementary, high school, undergraduate), and any optional context, the system leverages Artificial Intelligence to automatically generate a complete, customized suite of educational resources based on predefined structural presets. 

The application features a robust, Obsidian-like Markdown editor for reviewing and refining the generated content. Users can seamlessly organize materials by subject and easily export their final documents to PDF format for distribution.

## 2. Target Audience
- **Teachers and Professors:** Seeking to streamline lesson planning and assessment creation.
- **Instructional Designers:** Looking for quick drafting of course materials and study guides.
- **Tutors and Independent Educators:** Needing personalized materials adapted to different student levels and learning paces.

## 3. Scope
### 3.1. In-Scope
- AI-driven generation of educational content (lesson plans, summaries, quizzes, assignments) tailored to student proficiency levels.
- A built-in, Obsidian-style Markdown editor for real-time content manipulation and visualization.
- Workspace organization capabilities (creating, editing, and managing multiple subjects and topics).
- Exporting generated and edited resources directly to PDF format.
- Pre-defined structural presets that generate a full suite of materials in a single action (e.g., a preset that generates "2 classes + 2 quizzes + 1 individual assignment").

### 3.2. Out-of-Scope (for Initial Release)
- Direct integration with external Learning Management Systems (LMS) like Canvas, Moodle, or Google Classroom.
- Direct distribution of materials to students through a student-facing portal.
- Collaborative editing (multi-player editing) in real-time with other educators.
- Advanced multimedia generation (e.g., generating educational videos, 3D models, or interactive web simulations).

## 4. Requirements
### 4.1. Functional Requirements
- **FR01 - User Authentication:** The system should allow users to create an account, log in, and securely manage their personal data.
- **FR02 - Subject Management:** Users must be able to create, read, update, and delete (CRUD) subjects/courses to organize their materials hierarchically.
- **FR03 - AI Resource Generation:** The system must accept input parameters (Subject, Content/Topic, Educational Level, Additional Instructions, Preset Type) and return a complete, structured set of markdown documents generated via AI.
- **FR04 - Preset Selection:** Users should be able to choose from a list of full-structure presets that dictate the entire composition of the generated materials (e.g., "Preset 1: 2 Classes + 2 Quizzes + 1 Assignment").
- **FR05 - Markdown Editing:** The application must provide a rich, Obsidian-like Markdown editor with syntax highlighting and live preview for viewing and modifying content.
- **FR06 - PDF Export:** The system must allow users to export any markdown document into a beautifully formatted, printable PDF file.
- **FR07 - Auto-Saving:** The editor must persistently save changes to prevent data loss during long editing sessions.

### 4.2. Non-Functional Requirements
- **NFR01 - Performance:** AI generation response times should be optimized, providing clear visual feedback or a loading state during generation.
- **NFR02 - Usability:** The user interface should be clean, intuitive, and closely mimic familiar markdown knowledge-base tools (like Obsidian or Notion) to minimize the learning curve.
- **NFR03 - Reliability:** Generated resources must be securely stored and accessible at any time without data corruption.
- **NFR04 - Scalability:** The backend and AI integration should be capable of efficiently handling multiple concurrent generation requests.
- **NFR05 - Security:** User data, subjects, and generated intellectual property must be isolated per user and protected against unauthorized access.

## 5. Core Features
- **Smart AI Generator Engine:** Context-aware content creation that adapts vocabulary, complexity, and structure based on the chosen educational level.
- **Subject Workspaces:** A clean, organized sidebar structure to separate different subjects, chapters, and their respective modules/lessons.
- **Zen Markdown Editor:** A distraction-free editing environment supporting standard markdown syntax, LaTeX for math equations, and code blocks.
- **One-Click Export:** Seamless conversion of markdown notes into professional-looking PDFs ready for printing or digital sharing.
- **Structural Preset Library:** A comprehensive library of predefined architectures that dictate the full combination of classes, assessments, and assignments to be generated for a cohesive learning module.

## 6. Future Enhancements (Roadmap)
- **Rich Media Support:** Ability to upload and embed images or diagrams directly into the markdown editor.
- **AI Revision & Chat:** An interactive AI chat side-panel to ask for specific paragraph rewrites or generation of additional quiz questions without regenerating the whole document.
- **Community Presets:** Allow users to create, save, and share their own custom structural presets with other educators to foster collaborative curriculum design.
## 7. User Files Structure
Each user can create *N* folders for *N* subjects/courses on him root folder. Each subject/course represents an group of contents to be taught, such like school subjects or courses. Inside each subject/course, there will be created many content specific folders for each learning subject, where the application will stores the AI-generated content in specific markdown files, according to the used preset.

![[Flyterial File Structure.png]]

