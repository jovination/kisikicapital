"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X, Send, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Kisiki Capital assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setIsMinimized(false)
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you with that. Could you provide more details?",
        "Thanks for your question. Our funding packages start at $5,000 and go up to $400,000.",
        "Our profit splits range from 70% to 90%, depending on your chosen package.",
        "You can get started by registering an account and selecting your preferred funding package. <a href='/signup'>Register here</a>",
        "Our team is available 24/7 to assist you with any questions or concerns.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black shadow-lg hover:bg-primary/90 transition-all duration-300 shadow-2xl"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-5 w-5" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 z-50 w-80 rounded-xl bg-white shadow-xl transition-all duration-300 overflow-hidden ${
            isMinimized ? "h-14" : "h-[400px] max-h-[70vh]"
          }`}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-primary p-3 rounded-t-xl">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 bg-white text-primary items-center justify-center">
                <span className="text-xs font-semibold">KC</span>
              </Avatar>
              <div className="ml-2">
                <h3 className="text-xs font-semibold text-black">Kisiki Capital</h3>
                <p className="text-[10px] text-black/70">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button onClick={toggleMinimize} className="text-black hover:text-black/70 p-1 rounded-full">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <div className="flex h-[calc(100%-112px)] flex-col overflow-y-auto p-3">
              <div className="flex-1 space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-xl p-3 ${
                        msg.sender === "user" ? "bg-primary/10 text-zinc-900" : "bg-zinc-100 text-zinc-900"
                      }`}
                    >
                      <p className="text-xs" dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                      <p className="mt-1 text-right text-[10px] text-zinc-500">
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          {!isMinimized && (
            <div className="border-t border-zinc-100 p-3">
              <div className="flex items-center bg-zinc-50 rounded-lg overflow-hidden">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 border-0 bg-transparent text-xs focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  onClick={handleSendMessage}
                  className="h-8 w-8 rounded-lg bg-primary text-black hover:bg-primary/90 p-0"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}