import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
// ... other imports

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDFc3r1C8NorAqVpXlJh3qI6qRdf5M8O5w" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
// ... your App component code ...

const root = createRoot(document.getElementById('root'));
root.render(<App />);
