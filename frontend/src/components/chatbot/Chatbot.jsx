import { useEffect, useRef, useState } from 'react';
import { faqData, quickReplies, fallbackAnswer } from '../../constants/chatbotData';
import '../../styles/chatbot.css';

// Simple keyword-overlap scorer — no API key needed.
function findAnswer(rawInput) {
  const input = rawInput.toLowerCase().trim();
  if (!input) return fallbackAnswer;

  let best = null;
  let bestScore = 0;

  faqData.forEach((entry) => {
    let score = 0;
    entry.keywords.forEach((kw) => {
      if (input.includes(kw)) {
        score += kw.split(' ').length;
      }
    });
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  });

  return bestScore > 0 ? best.answer : fallbackAnswer;
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi! 👋 I'm the TBI GEHU assistant. Ask me about applying, programs, funding, mentors, or events.",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = { id: `u-${Date.now()}`, sender: 'user', text: trimmed };
    const botMsg = { id: `b-${Date.now()}`, sender: 'bot', text: findAnswer(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chatbot-root">
      {isOpen && (
        <div className="chatbot-panel" role="dialog" aria-label="TBI GEHU FAQ Chatbot">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-avatar">TBI</span>
              <div>
                <p className="chatbot-title">TBI GEHU Assistant</p>
                <p className="chatbot-subtitle">Ask me anything</p>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {messages.length <= 1 && (
            <div className="chatbot-quick-replies">
              {quickReplies.map((q) => (
                <button key={q} type="button" className="chatbot-chip" onClick={() => sendMessage(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="chatbot-input"
              aria-label="Type your question"
            />
            <button type="submit" className="chatbot-send" aria-label="Send message">
              ➤
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close FAQ chatbot' : 'Open FAQ chatbot'}
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
}

export default Chatbot;