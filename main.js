// 1. FIXED IMPORTS for Browser
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenerativeAI } from "@google/generative-ai";

// 2. INITIALIZE GEMINI (Use your NEW key here)
// Warning: Putting the key here exposes it to the public. 
// For a demo/prototype this is okay, but be careful.
const genAI = new GoogleGenerativeAI("YOUR_NEW_API_KEY_HERE");

// 3. YOUR APP COMPONENT
// PASTE YOUR REAL APP CODE HERE. 
// I have added a placeholder so you can see it working immediately.

function App() {
  const [status, setStatus] = useState("Ready");

  useEffect(() => {
    // Test the API connection on load
    async function testConnection() {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Say hello!");
        console.log(result.response.text());
        setStatus("Connected to Gemini! Check console.");
      } catch (error) {
        console.error("API Error:", error);
        setStatus("Error connecting (Check API Key)");
      }
    }
    testConnection();
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-dynapuff text-brand-purple mb-4">
        Communities' Choice Portal
      </h1>
      <p className="text-xl text-slate-600">{status}</p>
      <div className="mt-8 p-4 bg-white rounded shadow max-w-md mx-auto">
        <p>If you see this, React is working!</p>
        <p className="text-sm text-gray-500 mt-2">
          Now paste your full App component code into main.js
        </p>
      </div>
    </div>
  );
}

// 4. RENDER THE APP
const root = createRoot(document.getElementById('root'));
root.render(<App />);
