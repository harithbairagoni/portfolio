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
  ShieldAlert,
  Check,
  Copy,
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
        'Welcome to HARITH.OS Knowledge Engine. I am trained exclusively on Bairagoni Harith’s verified portfolio data—covering his work in Strategy, ₹152 Cr Industrial Execution, LANDSAFE (PropTech), problem-solving principles, and AI Lab experiments. How can I assist you?',
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
    'What is his experience?',
    'How does he approach problems?',
    'What is LANDSAFE?',
    'Tell me about the ethanol plant project.',
    'Why should I work with Harith?',
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

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.answer || 'The portfolio does not contain that information.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: data.source,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Failed to query assistant:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-err-${Date.now()}`,
          role: 'assistant',
          content:
            'The portfolio does not contain that information. You can ask about Harith’s work with LANDSAFE, the ₹152 Cr ethanol plant, his political strategy analytics, or his 5 thinking principles.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          'Knowledge session reset. Ask any question strictly grounded in Harith’s verified portfolio.',
        timestamp: 'Now',
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl h-[85vh] max-h-[750px] flex flex-col rounded-3xl bg-[#0b0d13] border border-[#23293c] shadow-2xl text-zinc-100 overflow-hidden"
          id="ask-harith-modal"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#1c2232] flex items-center justify-between bg-[#0e1017]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#141724] border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold font-mono text-white tracking-wide">
                    ASK HARITH
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 font-semibold">
                    GROUNDED AI
                  </span>
                </div>
                <p className="text-[11px] font-mono text-zinc-400">
                  Strictly grounded in verified portfolio content. Zero hallucination.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetChat}
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Close Assistant"
                id="close-ask-harith-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Questions Strip */}
          <div className="px-4 sm:px-6 py-2.5 bg-[#090b10] border-b border-[#171b26] overflow-x-auto flex items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-500 shrink-0 uppercase">
              SUGGESTED:
            </span>
            {exampleQuestions.map((eq) => (
              <button
                key={eq}
                onClick={() => handleSend(eq)}
                className="px-2.5 py-1 rounded-md bg-[#131622] hover:bg-[#1c2234] border border-[#202738] text-[11px] font-mono text-zinc-300 hover:text-white whitespace-nowrap cursor-pointer transition-colors"
              >
                {eq}
              </button>
            ))}
          </div>

          {/* Chat Messages List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-sans text-sm">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-[#141724] border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 leading-relaxed ${
                      isUser
                        ? 'bg-zinc-100 text-zinc-950 font-medium'
                        : 'bg-[#121520] border border-[#1e2434] text-zinc-200'
                    }`}
                  >
                    <div className="text-xs font-mono mb-1 flex items-center justify-between gap-4">
                      <span className={isUser ? 'text-zinc-600' : 'text-zinc-400'}>
                        {isUser ? 'YOU' : 'HARITH.OS AGENT'}
                      </span>
                      <span className={isUser ? 'text-zinc-400' : 'text-zinc-500'}>
                        {msg.timestamp}
                      </span>
                    </div>

                    <div className="text-sm whitespace-pre-wrap">{msg.content}</div>

                    {!isUser && (
                      <div className="mt-3 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                        <span>PORTFOLIO VERIFIED</span>
                        <button
                          onClick={() => copyToClipboard(msg.content, msg.id)}
                          className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>COPY</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#141724] border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Bot className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div className="p-4 rounded-2xl bg-[#121520] border border-[#1e2434] text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Synthesizing answer from portfolio facts...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-4 sm:p-6 bg-[#0e1017] border-t border-[#1c2232]">
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
                placeholder="Ask about Harith's work, LANDSAFE, ethanol plant, strategy..."
                className="flex-1 bg-[#121520] border border-[#222838] focus:border-emerald-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all font-sans"
                id="ask-harith-input"
              />
              <button
                type="submit"
                disabled={!inputQuestion.trim() || loading}
                className="px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-mono font-bold text-xs flex items-center gap-2 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                id="ask-harith-submit"
              >
                <span>SEND</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="text-[10px] font-mono text-zinc-500 text-center mt-2.5">
              Constraint enforced: AI answers ONLY from verified portfolio facts.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
