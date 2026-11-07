import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  X,
  Send,
  Terminal,
  RotateCcw,
  Bot,
  User,
  ShieldCheck,
  Check,
  Copy,
  ArrowRight
} from 'lucide-react';
import { ChatMessage } from '../types';

interface AskHarithModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AskHarithModal({ isOpen, onClose }: AskHarithModalProps) {
  const [inputQuestion, setInputQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Welcome to Harith’s Grounded Knowledge Copilot. I am trained exclusively on Bairagoni Harith’s verified portfolio data—covering his work in Strategy, ₹152 Cr Industrial Execution, LANDSAFE (PropTech), problem-solving principles, and AI Lab experiments. What would you like to explore?',
      timestamp: 'Now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const exampleQuestions = [
    'What has Harith built?',
    'What is his experience in ₹152 Cr execution?',
    'How does LANDSAFE solve land diligence?',
    'Tell me about Cold Connect.',
    'What are his core operating principles?',
  ];

  const handleSend = async (questionToSend?: string) => {
    const q = (questionToSend || inputQuestion).trim();
    if (!q || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuestion('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask-harith', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          conversationHistory: messages.slice(-4),
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.answer || 'Thank you for your question. Feel free to ask more details about Harith’s track record.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      // Local fallback answer if backend AI endpoint is not active
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: `Harith is a high-agency systems builder with experience across ₹152 Cr greenfield industrial execution (100 KLPD plant), PropTech diligence infrastructure at LANDSAFE (40% TAT reduction, 20+ verified properties), and product workflows like Cold Connect. Feel free to browse his case studies or reach him directly at harithgoud2@gmail.com.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#F7F6F2] rounded-2xl border border-[#DEDDD7] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#DEDDD7] bg-[#EFECE6]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#DEDDD7]">
                <Bot className="w-5 h-5 text-[#66705B]" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#171717] font-normal">
                  Ask Harith · Verified Knowledge Engine
                </h3>
                <p className="text-[10px] font-mono text-[#66705B] flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#66705B]" />
                  GROUNDED EXCLUSIVELY ON REAL VERIFIED PORTFOLIO DATA
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#6B6B67] hover:text-[#171717] hover:bg-[#E5E3DC] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[#EFECE6] border border-[#DEDDD7] flex items-center justify-center shrink-0 mt-0.5 text-[#66705B]">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#171717] text-white rounded-tr-none'
                      : 'bg-[#FFFFFF] text-[#171717] border border-[#DEDDD7] rounded-tl-none shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                  <div className="mt-2 flex items-center justify-between gap-4 text-[10px] font-mono opacity-60">
                    <span>{m.timestamp}</span>
                    {m.role === 'assistant' && (
                      <button
                        onClick={() => copyText(m.content, m.id)}
                        className="hover:opacity-100 flex items-center gap-1 cursor-pointer"
                      >
                        {copiedId === m.id ? (
                          <>
                            <Check className="w-3 h-3 text-[#66705B]" />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {m.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#171717] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                    U
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 items-center text-xs font-mono text-[#66705B]">
                <div className="w-7 h-7 rounded-lg bg-[#EFECE6] border border-[#DEDDD7] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-pulse" />
                </div>
                <span>SYNTHESIZING GROUNDED ANSWER...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Prompts */}
          <div className="px-6 py-2.5 bg-[#F2F0E8] border-t border-[#DEDDD7] overflow-x-auto flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#6B6B67] shrink-0">SUGGESTED:</span>
            {exampleQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#FFFFFF] hover:bg-[#171717] hover:text-white text-[#171717] border border-[#DEDDD7] shrink-0 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-[#FFFFFF] border-t border-[#DEDDD7]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputQuestion}
                onChange={(e) => setInputQuestion(e.target.value)}
                placeholder="Ask anything about Harith's projects, principles or experience..."
                className="flex-1 bg-[#F7F6F2] border border-[#DEDDD7] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#171717] focus:outline-none focus:border-[#66705B] transition-colors"
              />
              <button
                type="submit"
                disabled={!inputQuestion.trim() || loading}
                className="p-2.5 rounded-xl bg-[#171717] hover:bg-[#333333] text-white disabled:opacity-40 transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
