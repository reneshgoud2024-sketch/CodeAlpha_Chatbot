/* ============================================================
   NexaBot — AI FAQ Chatbot | CodeAlpha Internship Task 2
   NLP-powered FAQ matching using TF-IDF + Cosine Similarity
   ============================================================ */

// ─── FAQ Knowledge Base ─────────────────────────────────────
const FAQ_DATA = [
  {
    category: "About CodeAlpha",
    faqs: [
      {
        q: "What is CodeAlpha?",
        a: "CodeAlpha is a leading software development company dedicated to driving innovation and excellence across emerging technologies. They provide internship programs in AI, Web Development, and more, offering real-world experience to students and professionals.",
        keywords: ["codealpha", "company", "about", "what", "who"]
      },
      {
        q: "What does CodeAlpha do?",
        a: "CodeAlpha specializes in software development and technology innovation. They build cutting-edge solutions across AI, web development, cloud computing, and other emerging tech domains while also nurturing future talent through their internship programs.",
        keywords: ["codealpha", "do", "services", "work", "specializes"]
      },
      {
        q: "Where is CodeAlpha located?",
        a: "CodeAlpha operates as a tech company with a strong online presence. You can reach them through their official website at www.codealpha.tech for location details, partnership inquiries, and program information.",
        keywords: ["where", "location", "located", "address", "office", "contact"]
      }
    ]
  },
  {
    category: "Internship Program",
    faqs: [
      {
        q: "What is the AI internship about?",
        a: "The AI internship at CodeAlpha provides hands-on experience in AI model development, machine learning workflows, and real-time data processing. Interns work in a dynamic environment, receive expert mentorship, and contribute to projects reflecting the latest advancements in artificial intelligence.",
        keywords: ["ai", "internship", "artificial", "intelligence", "program", "about"]
      },
      {
        q: "What are the internship perks?",
        a: "CodeAlpha offers amazing perks including:\n🎫 Internship Offer Letter\n🏅 Completion Certificate (QR Verified)\n🆔 Unique ID Certificate\n📝 Letter of Recommendation (based on performance)\n💼 Job Opportunities / Placement Support\n📄 Resume Building Support",
        keywords: ["perks", "benefits", "certificate", "recommendation", "offer", "letter", "job", "placement"]
      },
      {
        q: "How many tasks do I need to complete?",
        a: "You need to complete any 2 or 3 out of the 4 tasks listed in your domain. You don't have to do all four — just pick the ones that interest you the most and deliver quality work!",
        keywords: ["how", "many", "tasks", "complete", "required", "number"]
      },
      {
        q: "What is the internship duration?",
        a: "The internship tasks should be completed within the mentioned time frame provided in your offer letter. Make sure to manage your time well and submit all projects before the deadline using the Submission Form.",
        keywords: ["duration", "time", "long", "period", "weeks", "deadline", "when"]
      }
    ]
  },
  {
    category: "Tasks & Submissions",
    faqs: [
      {
        q: "What AI tasks are available?",
        a: "There are 4 AI tasks available (complete any 2-3):\n\n✅ Task 1: Language Translation Tool — Build a UI with translation API integration\n✅ Task 2: Chatbot for FAQs — NLP-powered FAQ chatbot with cosine similarity\n✅ Task 3 & 4: Check your task sheet for additional projects\n\nEach task tests different AI/ML skills!",
        keywords: ["tasks", "available", "list", "ai", "projects", "what", "task"]
      },
      {
        q: "How do I submit my project?",
        a: "Follow these steps to submit:\n1️⃣ Upload source code to GitHub (repo name: CodeAlpha_ProjectName)\n2️⃣ Post a video explanation on LinkedIn with your GitHub link\n3️⃣ Tag @CodeAlpha in your LinkedIn post\n4️⃣ Use the official Submission Form to submit your task\n5️⃣ Make sure everything is complete before the deadline!",
        keywords: ["submit", "submission", "how", "upload", "github", "form", "project"]
      },
      {
        q: "What is the GitHub repository naming convention?",
        a: "Your GitHub repository should be named: CodeAlpha_ProjectName\n\nFor example:\n• CodeAlpha_LanguageTranslationTool\n• CodeAlpha_ChatbotFAQ\n• CodeAlpha_ObjectDetection\n\nMake sure the repo is public and contains your complete source code!",
        keywords: ["github", "repository", "repo", "name", "naming", "convention", "format"]
      },
      {
        q: "Do I need to post on LinkedIn?",
        a: "Yes! You need to:\n1️⃣ Share your internship status on LinkedIn tagging @CodeAlpha\n2️⃣ Post a video explanation of each completed project\n3️⃣ Include your GitHub repository link in the post\n\nThis helps showcase your work and is part of the submission requirements!",
        keywords: ["linkedin", "post", "share", "social", "media", "video"]
      },
      {
        q: "What is the FAQ Chatbot task?",
        a: "Task 2 — Chatbot for FAQs requires you to:\n🔹 Collect FAQs related to a topic or product\n🔹 Preprocess text using NLP (tokenize, clean, etc.)\n🔹 Match user questions using cosine similarity or intent matching\n🔹 Display the best matching answer\n🔹 Create a simple chat UI for user interaction\n\nThis project is exactly what NexaBot demonstrates!",
        keywords: ["faq", "chatbot", "task", "2", "two", "chat", "bot", "nlp"]
      },
      {
        q: "What is the Language Translation Tool task?",
        a: "Task 1 — Language Translation Tool requires you to:\n🔹 Create a UI for entering text and selecting languages\n🔹 Use a translation API (Google Translate / Microsoft Translator)\n🔹 Send text to the API and get translated response\n🔹 Display translated text clearly\n🔹 Optional: Add copy button or text-to-speech feature",
        keywords: ["translation", "language", "tool", "task", "1", "one", "translate"]
      }
    ]
  },
  {
    category: "Technical & AI Concepts",
    faqs: [
      {
        q: "What is cosine similarity?",
        a: "Cosine similarity measures the cosine of the angle between two vectors in multi-dimensional space. In NLP, it's used to determine how similar two pieces of text are — a score of 1 means identical, 0 means completely different. It's commonly used in search engines, recommendation systems, and chatbots like this one!",
        keywords: ["cosine", "similarity", "measure", "vector", "angle", "nlp", "matching"]
      },
      {
        q: "What is NLP?",
        a: "NLP (Natural Language Processing) is a branch of AI that helps computers understand, interpret, and generate human language. Key techniques include:\n🔹 Tokenization — Breaking text into words/tokens\n🔹 Stemming/Lemmatization — Reducing words to root forms\n🔹 TF-IDF — Measuring word importance\n🔹 Named Entity Recognition — Identifying names, places, etc.",
        keywords: ["nlp", "natural", "language", "processing", "text", "what"]
      },
      {
        q: "What is TF-IDF?",
        a: "TF-IDF (Term Frequency — Inverse Document Frequency) is a statistical measure that evaluates how important a word is to a document in a collection. It works by:\n📊 TF: How often a word appears in a document\n📊 IDF: How rare the word is across all documents\n📊 TF-IDF = TF × IDF\n\nHigher scores mean the word is more significant to that document. NexaBot uses this technique to match your questions!",
        keywords: ["tfidf", "tf-idf", "term", "frequency", "inverse", "document", "weight"]
      },
      {
        q: "What are NLTK and SpaCy?",
        a: "NLTK and SpaCy are popular Python NLP libraries:\n\n📚 NLTK (Natural Language Toolkit): Great for learning and research. Includes tokenizers, stemmers, parsers, and corpora.\n\n⚡ SpaCy: Production-ready, fast NLP library. Excellent for named entity recognition, dependency parsing, and text classification.\n\nBoth are commonly used for preprocessing text in chatbot development!",
        keywords: ["nltk", "spacy", "library", "python", "nlp", "tools"]
      },
      {
        q: "What is machine learning?",
        a: "Machine Learning (ML) is a subset of AI where systems learn from data to improve performance without being explicitly programmed. Key types include:\n🔹 Supervised Learning — Learning from labeled data\n🔹 Unsupervised Learning — Finding patterns in unlabeled data\n🔹 Reinforcement Learning — Learning through trial and reward\n\nML powers everything from chatbots to self-driving cars!",
        keywords: ["machine", "learning", "ml", "ai", "model", "train", "algorithm"]
      },
      {
        q: "What is tokenization?",
        a: "Tokenization is the process of breaking text into smaller units called tokens. For example:\n\nInput: \"How are you doing?\"\nTokens: [\"How\", \"are\", \"you\", \"doing\", \"?\"]\n\nIt's the first step in most NLP pipelines and is essential for text analysis, sentiment analysis, and building chatbots like NexaBot!",
        keywords: ["tokenization", "tokenize", "tokens", "split", "words", "text"]
      }
    ]
  },
  {
    category: "Help & Support",
    faqs: [
      {
        q: "How does this chatbot work?",
        a: "NexaBot uses NLP techniques right in your browser:\n1️⃣ Text Preprocessing — Tokenization, stopword removal, stemming\n2️⃣ TF-IDF Vectorization — Converting text to numerical vectors\n3️⃣ Cosine Similarity — Finding the most similar FAQ to your question\n4️⃣ Smart Response — Delivering the best matching answer\n\nAll processing happens client-side with zero API calls!",
        keywords: ["how", "work", "chatbot", "bot", "function", "process"]
      },
      {
        q: "Can you help me with something not in the FAQs?",
        a: "I'm currently trained on a specific set of FAQs about CodeAlpha, the internship program, AI tasks, and technical concepts. If your question isn't covered, try rephrasing it or browse the FAQ Library using the 📋 button in the header. For other inquiries, visit www.codealpha.tech!",
        keywords: ["help", "other", "different", "not", "faq", "else", "more"]
      },
      {
        q: "Who built this chatbot?",
        a: "NexaBot was built as part of CodeAlpha's AI Internship — Task 2 (Chatbot for FAQs). It demonstrates NLP concepts including text preprocessing, TF-IDF vectorization, and cosine similarity matching, all implemented in vanilla JavaScript with a premium glassmorphism UI. ✨",
        keywords: ["who", "built", "made", "created", "developer", "author"]
      }
    ]
  }
];

// ─── NLP Engine ─────────────────────────────────────────────

// Stopwords list
const STOPWORDS = new Set([
  "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours",
  "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers",
  "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves",
  "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are",
  "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does",
  "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until",
  "while", "of", "at", "by", "for", "with", "about", "against", "between", "through",
  "during", "before", "after", "above", "below", "to", "from", "up", "down", "in",
  "out", "on", "off", "over", "under", "again", "further", "then", "once", "here",
  "there", "when", "where", "why", "how", "all", "both", "each", "few", "more", "most",
  "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than",
  "too", "very", "s", "t", "can", "will", "just", "don", "should", "now", "d", "ll",
  "m", "o", "re", "ve", "y", "ain", "aren", "couldn", "didn", "doesn", "hadn", "hasn",
  "haven", "isn", "ma", "mightn", "mustn", "needn", "shan", "shouldn", "wasn",
  "weren", "won", "wouldn"
]);

// Simple stemmer (Porter-like suffix stripping)
function stem(word) {
  word = word.toLowerCase();
  const suffixes = ['ation', 'ment', 'ness', 'able', 'ible', 'ful', 'less', 'ous',
    'ive', 'ing', 'tion', 'sion', 'ed', 'ly', 'er', 'est', 'al', 'ity', 'ize', 'ise', 'en', 's'];
  for (const s of suffixes) {
    if (word.length > s.length + 2 && word.endsWith(s)) {
      return word.slice(0, -s.length);
    }
  }
  return word;
}

// Tokenize and preprocess text
function preprocess(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOPWORDS.has(w))
    .map(stem);
}

// Build a flat list of all FAQs with preprocessed tokens
const allFaqs = [];
FAQ_DATA.forEach(cat => {
  cat.faqs.forEach(faq => {
    const tokens = preprocess(faq.q + ' ' + faq.keywords.join(' '));
    allFaqs.push({ ...faq, category: cat.category, tokens });
  });
});

// Build document frequency map
const docFreq = {};
const N = allFaqs.length;
allFaqs.forEach(doc => {
  const unique = new Set(doc.tokens);
  unique.forEach(t => { docFreq[t] = (docFreq[t] || 0) + 1; });
});

// Compute TF-IDF vector for a list of tokens
function tfidfVector(tokens) {
  const tf = {};
  tokens.forEach(t => { tf[t] = (tf[t] || 0) + 1; });
  const vec = {};
  for (const t in tf) {
    const idf = Math.log((N + 1) / ((docFreq[t] || 0) + 1)) + 1;
    vec[t] = (tf[t] / tokens.length) * idf;
  }
  return vec;
}

// Cosine similarity between two vectors
function cosineSimilarity(v1, v2) {
  let dot = 0, mag1 = 0, mag2 = 0;
  const allKeys = new Set([...Object.keys(v1), ...Object.keys(v2)]);
  allKeys.forEach(k => {
    const a = v1[k] || 0, b = v2[k] || 0;
    dot += a * b;
    mag1 += a * a;
    mag2 += b * b;
  });
  if (mag1 === 0 || mag2 === 0) return 0;
  return dot / (Math.sqrt(mag1) * Math.sqrt(mag2));
}

// Precompute TF-IDF vectors for all FAQs
allFaqs.forEach(doc => { doc.vector = tfidfVector(doc.tokens); });

// Find best matching FAQ
function findBestMatch(query) {
  const queryTokens = preprocess(query);
  if (queryTokens.length === 0) return null;

  const queryVec = tfidfVector(queryTokens);
  let bestScore = 0, bestFaq = null;

  // Also check keyword overlap for hybrid scoring
  allFaqs.forEach(doc => {
    const cosSim = cosineSimilarity(queryVec, doc.vector);

    // Keyword bonus: direct keyword match boosts score
    let kwBonus = 0;
    const queryLower = query.toLowerCase();
    doc.keywords.forEach(kw => {
      if (queryLower.includes(kw)) kwBonus += 0.08;
    });

    const totalScore = cosSim + Math.min(kwBonus, 0.3);

    if (totalScore > bestScore) {
      bestScore = totalScore;
      bestFaq = doc;
    }
  });

  // Threshold to avoid random matches
  if (bestScore < 0.1) return null;
  return { faq: bestFaq, score: bestScore };
}

// ─── Chat UI Controller ─────────────────────────────────────

const chatMessages = document.getElementById('chatMessages');
const welcomeScreen = document.getElementById('welcomeScreen');
const quickReplies = document.getElementById('quickReplies');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarBody = document.getElementById('sidebarBody');
const btnFaqList = document.getElementById('btnFaqList');
const btnClearChat = document.getElementById('btnClearChat');
const sidebarClose = document.getElementById('sidebarClose');

let chatStarted = false;

// Get current time string
function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Create message element
function createMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = `message ${type}`;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = type === 'bot' ? '🤖' : '👤';

  const content = document.createElement('div');
  content.className = 'msg-content';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  // Convert newlines to <br>
  bubble.innerHTML = text.replace(/\n/g, '<br>');

  const time = document.createElement('div');
  time.className = 'msg-time';
  time.textContent = getTime();

  content.appendChild(bubble);
  content.appendChild(time);
  msg.appendChild(avatar);
  msg.appendChild(content);

  return msg;
}

// Show typing indicator
function showTyping() {
  const msg = document.createElement('div');
  msg.className = 'message bot';
  msg.id = 'typingMsg';

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = '🤖';

  const content = document.createElement('div');
  content.className = 'msg-content';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';

  content.appendChild(bubble);
  msg.appendChild(avatar);
  msg.appendChild(content);
  chatMessages.appendChild(msg);
  scrollToBottom();
}

function removeTyping() {
  const t = document.getElementById('typingMsg');
  if (t) t.remove();
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show quick reply suggestions
function showQuickReplies(suggestions) {
  quickReplies.innerHTML = '';
  suggestions.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'quick-btn';
    btn.textContent = s;
    btn.addEventListener('click', () => handleUserMessage(s));
    quickReplies.appendChild(btn);
  });
}

function clearQuickReplies() {
  quickReplies.innerHTML = '';
}

// Handle sending a user message
function handleUserMessage(text) {
  if (!text.trim()) return;

  // Hide welcome screen on first message
  if (!chatStarted) {
    chatStarted = true;
    welcomeScreen.style.display = 'none';
  }

  // Clear quick replies
  clearQuickReplies();

  // Add user message
  chatMessages.appendChild(createMessage(text.trim(), 'user'));
  scrollToBottom();

  // Clear input
  userInput.value = '';
  userInput.style.height = 'auto';

  // Show typing
  showTyping();

  // Process with delay for realism
  const delay = 600 + Math.random() * 800;
  setTimeout(() => {
    removeTyping();

    const result = findBestMatch(text);
    let response;
    let suggestions = [];

    if (result && result.faq) {
      response = result.faq.a;
      // Generate contextual suggestions
      const otherFaqs = allFaqs
        .filter(f => f.q !== result.faq.q)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      suggestions = otherFaqs.map(f => f.q);
    } else {
      response = "I'm not sure I understand that question. 🤔 Could you try rephrasing it? You can also browse the FAQ Library using the 📋 button above, or try one of the suggestions below!";
      suggestions = [
        "What is CodeAlpha?",
        "What AI tasks are available?",
        "How does this chatbot work?"
      ];
    }

    chatMessages.appendChild(createMessage(response, 'bot'));
    scrollToBottom();

    // Show quick reply suggestions
    if (suggestions.length > 0) {
      showQuickReplies(suggestions);
    }
  }, delay);
}

// ─── Event Listeners ────────────────────────────────────────

// Send button
sendBtn.addEventListener('click', () => handleUserMessage(userInput.value));

// Enter key (shift+enter for new line)
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleUserMessage(userInput.value);
  }
});

// Auto-resize textarea
userInput.addEventListener('input', () => {
  userInput.style.height = 'auto';
  userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
});

// Welcome cards
document.querySelectorAll('.welcome-card').forEach(card => {
  card.addEventListener('click', () => {
    handleUserMessage(card.dataset.question);
  });
});

// Clear chat
btnClearChat.addEventListener('click', () => {
  chatStarted = false;
  chatMessages.innerHTML = '';
  chatMessages.appendChild(welcomeScreen);
  welcomeScreen.style.display = 'flex';
  clearQuickReplies();
});

// ─── FAQ Sidebar ────────────────────────────────────────────

function populateSidebar() {
  sidebarBody.innerHTML = '';
  FAQ_DATA.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'faq-category';
    section.innerHTML = `<h4>${cat.category}</h4>`;
    cat.faqs.forEach(faq => {
      const item = document.createElement('div');
      item.className = 'faq-item';
      item.textContent = faq.q;
      item.addEventListener('click', () => {
        closeSidebar();
        handleUserMessage(faq.q);
      });
      section.appendChild(item);
    });
    sidebarBody.appendChild(section);
  });
}

function openSidebar() {
  sidebar.classList.add('active');
  sidebarOverlay.classList.add('active');
}

function closeSidebar() {
  sidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
}

btnFaqList.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Initialize sidebar
populateSidebar();

// Focus input on load
userInput.focus();
