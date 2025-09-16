# Speech Detection - Voice-Based Note-Taking App

## Project Description

This project is a web-based voice note-taking application that leverages the Web Speech API for speech recognition. It allows users to take notes using their voice, supporting multiple languages, and provides features such as saving, clearing, exporting notes, and toggling dark mode. The project includes two versions of the app: a start version with a full UI and a finished simpler demo.

## Features

- Real-time speech-to-text conversion using the Web Speech API
- Support for multiple languages (English, Spanish, French, German, Swahili)
- Save notes locally in the browser's local storage
- Clear all saved notes
- Export notes as a text file
- Toggle between light and dark mode
- Two HTML versions:
  - `index-START.html`: Full-featured voice note-taking app with UI controls
  - `index-FINISHED.html`: Simplified speech detection demo with inline script and styling

## Installation

1. Clone or download the repository.
2. Ensure you have [Node.js](https://nodejs.org/) installed.
3. Install dependencies by running:
   ```
   npm install
   ```
4. Start the development server with:
   ```
   npm start
   ```
5. Open your browser and navigate to the server address (usually `http://localhost:3000`).

## Usage

- Use the dropdown to select your preferred language for speech recognition.
- Speak into your microphone; your speech will be transcribed in real-time.
- Use the "Save Notes" button to save your current notes to local storage.
- Use the "Clear Notes" button to delete all saved notes.
- Use the "Export Notes" button to download your notes as a text file.
- Toggle dark mode using the "Toggle Dark Mode" button for a different visual theme.

## File Overview

- `index-START.html`: The main app interface with full features.
- `index-FINISHED.html`: A simpler demo showcasing basic speech detection.
- `script.js`: JavaScript logic handling speech recognition, note management, and UI interactions.
- `style.css`: Stylesheet for the app's appearance.
- `package.json`: Project metadata and scripts.

## License

This project is licensed under the ISC License.

## Author

[Your Name Here]
