# NexaBot — AI FAQ Chatbot 🤖

This repository contains the source code for **Task 2: Chatbot for FAQs**, developed as part of the Artificial Intelligence Internship at **CodeAlpha**. 

NexaBot is an intelligent, modern, and highly interactive FAQ chatbot built entirely with web technologies (HTML, CSS, JavaScript). It uses Natural Language Processing (NLP) techniques, specifically **TF-IDF vectorization** and **Cosine Similarity**, to match user queries with the most relevant answers from a predefined knowledge base.

## 🌟 Features

- **NLP-Powered Matching**: Implements custom text preprocessing (tokenization, stopword removal, stemming) and TF-IDF to calculate cosine similarity between user queries and FAQs.
- **Premium Glassmorphism UI**: A visually stunning interface with frosted glass effects, smooth gradients, subtle shadows, and interactive hover animations.
- **Dynamic Welcome Screen**: Provides quick-start suggestion cards for users.
- **Smart Suggestions**: Automatically suggests related questions based on the current context.
- **FAQ Library Sidebar**: A searchable sidebar to browse all available FAQs by category.
- **Zero Dependencies**: Entirely built with Vanilla JavaScript, requiring no external NLP libraries or API calls—everything runs blazingly fast in the browser!

## 🛠️ Technology Stack

- **HTML5**: Semantic structure and accessibility.
- **Vanilla CSS3**: Custom properties (variables), CSS Grid/Flexbox, Keyframe animations, and Backdrop-filter for the glass effect.
- **Vanilla JavaScript (ES6+)**: DOM manipulation, event handling, and the core NLP matching engine.

## 🚀 How It Works (NLP Engine)

1. **Knowledge Base**: FAQs are stored in categorized JSON objects with pre-defined keywords.
2. **Preprocessing**: Both the FAQs and user inputs are converted to lowercase, stripped of punctuation, tokenized, filtered of stopwords, and stemmed.
3. **TF-IDF Vectorization**: Term Frequency-Inverse Document Frequency vectors are pre-computed for all FAQs to measure word importance.
4. **Cosine Similarity**: When a user asks a question, it is vectorized and compared against all FAQ vectors using cosine similarity to find the mathematical "closest match".
5. **Hybrid Scoring**: Keyword overlap is also factored in to boost accuracy.

## 📂 Project Structure

```
CodeAlpha_ChatbotFAQ/
│
├── index.html       # The main chat interface
├── style.css        # Glassmorphism design system & animations
├── script.js        # NLP engine and chat controller logic
└── README.md        # Project documentation
```

## 💻 Running the Project Locally

Since this project requires no backend or external APIs, you can run it instantly:

1. Clone this repository to your local machine.
2. Open the folder.
3. Double-click on `index.html` to open it in your default web browser.
4. Start chatting with NexaBot!

## 📌 CodeAlpha Internship Details

- **Company**: [CodeAlpha](https://www.codealpha.tech)
- **Domain**: Artificial Intelligence
- **Task**: Task 2 — Chatbot for FAQs

---
*Designed & Developed for the CodeAlpha Internship Program.*
