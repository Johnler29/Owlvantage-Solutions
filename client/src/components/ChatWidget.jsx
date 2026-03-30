import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatWidget = () => {
  const [isOpen, isSetOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can we help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Our team will get back to you shortly.",
        "I'm here to help! What specific information do you need?",
        "That's a great question! Let me find the best answer for you.",
        "I understand. Can you provide more details about your inquiry?",
        "We appreciate your interest! Would you like to schedule a consultation?",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const toggleChat = () => {
    isSetOpen(!isOpen);
    if (!isOpen) setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={toggleChat}
            className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
            aria-label="Open chat"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-800 rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Chat Support</h3>
                <p className="text-xs text-blue-100">Usually replies instantly</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={toggleMinimize}
                  className="hover:bg-blue-700 p-2 rounded transition"
                  aria-label="Minimize chat"
                >
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={toggleChat}
                  className="hover:bg-blue-700 p-2 rounded transition"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-900 h-96"
                >
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          message.sender === "user"
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white rounded-bl-none"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "user"
                              ? "text-blue-100"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-200 dark:bg-slate-700 px-4 py-2 rounded-lg rounded-bl-none">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ y: [0, -8, 0] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                              className="w-2 h-2 bg-gray-500 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Area */}
            {!isMinimized && (
              <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800"
              >
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
