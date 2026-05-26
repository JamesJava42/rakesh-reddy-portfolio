import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

type Message = { role: "user" | "assistant"; content: string };

const QUICK_QUESTIONS = [
  "What's his AWS experience?",
  "Best projects?",
  "What certs does he have?",
  "Is he available now?",
];

const INTRO: Message = {
  role: "assistant",
  content:
    "Hi! I'm Rakesh's AI assistant. Ask me about his skills, experience, projects, or availability — I'll give you the short version.",
};

export default function AgentChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setUnread(false);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text?: string) {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;

    const updated: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? data.error ?? "Something went wrong." },
      ]);
      if (!open) setUnread(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm offline right now. Email rakeshmareddy42@gmail.com for a quick reply!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-80 sm:w-[360px] spotlight-card flex flex-col overflow-hidden"
            style={
              {
                maxHeight: "520px",
                "--mouse-x": "-200px",
                "--mouse-y": "-200px",
              } as React.CSSProperties
            }
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const r = el.getBoundingClientRect();
              el.style.setProperty("--mouse-x", `${e.clientX - r.left}px`);
              el.style.setProperty("--mouse-y", `${e.clientY - r.top}px`);
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-gradient-to-r from-orange-500/10 to-transparent flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                <FaRobot className="text-white text-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white leading-tight">Rakesh's AI Agent</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Online · Powered by Claude</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-slate-300 transition-colors p-1"
                aria-label="Close chat"
              >
                <FaTimes size={13} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3"
              style={{ minHeight: 180, maxHeight: 290 }}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaRobot className="text-white" style={{ fontSize: 10 }} />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                      m.role === "user"
                        ? "bg-orange-500/15 border border-orange-500/25 text-orange-100 rounded-tr-sm"
                        : "bg-white/5 border border-white/8 text-slate-200 rounded-tl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <FaRobot className="text-white" style={{ fontSize: 10 }} />
                  </div>
                  <div className="bg-white/5 border border-white/8 rounded-2xl rounded-tl-sm px-3 py-2.5">
                    <div className="flex gap-1 items-center">
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick question chips — show on fresh conversation */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-300 hover:bg-orange-500/20 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input row */}
            <div className="px-4 py-3 border-t border-white/8 flex gap-2 flex-shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 outline-none focus:border-orange-500/40 transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={loading || !input.trim()}
                className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 disabled:opacity-40 hover:brightness-110 transition-all"
                aria-label="Send"
              >
                <FaPaperPlane className="text-white" style={{ fontSize: 11 }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating chat button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-900/40 relative"
        aria-label="Chat with AI agent"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <FaTimes className="text-white text-xl" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <FaRobot className="text-white text-xl" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Unread dot */}
        {unread && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-orange-400 border-2 border-[#0b1221] animate-pulse" />
        )}

        {/* Online dot when closed */}
        {!open && !unread && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0b1221] availability-dot" />
        )}
      </motion.button>
    </div>
  );
}
