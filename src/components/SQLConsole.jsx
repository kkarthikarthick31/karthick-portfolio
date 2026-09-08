import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COMMANDS = {
  help: `Available commands:

about      → About Karthick
skills     → Technical skills
projects   → View projects
contact    → Contact information
clear      → Clear console
exit       → Close console`,

  about: `Karthick K
Java Full Stack Developer

MCA — Dhanalakshmi Srinivasan University
Focused on Java, Spring Boot, ReactJS and SQL.`,

  skills: `Java
JavaScript
SQL
Spring Boot
Spring MVC
Spring Security
Spring Data JPA
Hibernate
ReactJS
HTML / CSS
REST APIs
JWT
MySQL
PostgreSQL
Git / GitHub
Postman`,

  projects: `01  Inventory Management System
    Java + Spring Boot + ReactJS + MySQL

02  Farmer-to-Consumer Food Traceability System
    Java + Blockchain + MySQL`,

  contact: `Email:
kkarthikarthick31@gmail.com

GitHub:
github.com/kkarthikarthick31

LinkedIn:
linkedin.com/in/kkarthi2004`,

  clear: '',
};

export default function SQLConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'KARTHICK_DEV_CONSOLE v1.0',
    },
    {
      type: 'system',
      text: 'Type "help" to see available commands.',
    },
  ]);

  // Ctrl + K / Cmd + K → Open console
  useEffect(() => {
    const handleShortcut = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === 'k'
      ) {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleShortcut);

    return () => {
      window.removeEventListener('keydown', handleShortcut);
    };
  }, []);

  const executeCommand = (command) => {
    const cleanCommand = command.trim().toLowerCase();

    if (!cleanCommand) return;

    if (cleanCommand === 'exit') {
      setIsOpen(false);
      return;
    }

    if (cleanCommand === 'clear') {
      setHistory([]);
      return;
    }

    const result = COMMANDS[cleanCommand];

    if (result) {
      setHistory((prev) => [
        ...prev,
        {
          type: 'command',
          text: command,
        },
        {
          type: 'output',
          text: result,
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: 'command',
          text: command,
        },
        {
          type: 'error',
          text: `Command not found: ${command}\nType "help" for available commands.`,
        },
      ]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    executeCommand(input);
    setInput('');
  };

  return (
    <>
      {/* Desktop Keyboard Shortcut */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-5 left-5 z-[80] hidden md:block"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="
            rounded-lg border border-cyber-cyan/20
            bg-dark-900/70 px-3 py-2
            font-mono text-[10px]
            text-slate-500 backdrop-blur-md
            transition-all duration-300
            hover:border-cyber-cyan/50
            hover:text-cyber-cyan
          "
        >
          <span className="text-cyber-cyan">CTRL</span>
          <span className="mx-1">+</span>
          <span className="text-cyber-cyan">K</span>
          <span className="ml-2">DEV CONSOLE</span>
        </button>
      </motion.div>

      {/* Mobile Console Button */}
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open developer console"
        className="
          fixed bottom-5 right-5 z-[80]
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-cyber-cyan/30
          bg-dark-900/80
          font-mono text-sm
          text-cyber-cyan
          shadow-[0_0_20px_rgba(34,211,238,0.12)]
          backdrop-blur-md
          transition-all duration-300
          hover:border-cyber-cyan/60
          hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
          md:hidden
        "
      >
        {'>_'}
      </motion.button>

      {/* Console */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="
              fixed inset-0 z-[100]
              flex items-center justify-center
              bg-black/70 px-3 py-4
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="
                flex w-full max-w-3xl
                flex-col
                overflow-hidden
                rounded-2xl
                border border-cyber-cyan/30
                bg-dark-950/95
                shadow-[0_0_80px_rgba(34,211,238,0.15)]
              "
              style={{
                maxHeight: '90vh',
              }}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400" />

                  <span className="ml-2 truncate font-mono text-[10px] text-slate-500 sm:ml-3 sm:text-xs">
                    karthick@portfolio:~
                  </span>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="
                    ml-3 shrink-0
                    rounded-md
                    border border-white/10
                    px-2 py-1
                    font-mono text-[10px]
                    text-slate-500
                    transition-colors
                    hover:border-cyber-cyan/30
                    hover:text-cyber-cyan
                  "
                >
                  <span className="hidden sm:inline">ESC</span>
                  <span className="sm:hidden">✕</span>
                </button>
              </div>

              {/* Terminal Body */}
              <div
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  px-4 py-4
                  font-mono text-xs
                  sm:px-5 sm:py-5 sm:text-sm
                "
                style={{
                  maxHeight: '60vh',
                }}
              >
                {history.map((item, index) => (
                  <div key={index} className="mb-4">
                    {item.type === 'system' && (
                      <div className="whitespace-pre-wrap break-words text-cyber-cyan">
                        {item.text}
                      </div>
                    )}

                    {item.type === 'command' && (
                      <div className="whitespace-pre-wrap break-words text-slate-300">
                        <span className="text-cyber-cyan">$ </span>
                        {item.text}
                      </div>
                    )}

                    {item.type === 'output' && (
                      <div className="whitespace-pre-wrap break-words leading-6 text-slate-400">
                        {item.text}
                      </div>
                    )}

                    {item.type === 'error' && (
                      <div className="whitespace-pre-wrap break-words leading-6 text-red-400">
                        {item.text}
                      </div>
                    )}
                  </div>
                ))}

                {/* Input */}
                <form onSubmit={handleSubmit} className="flex items-center">
                  <span className="mr-2 shrink-0 text-cyber-cyan">$</span>

                  <input
                    autoFocus
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    className="
                      w-full
                      min-w-0
                      bg-transparent
                      font-mono
                      text-slate-200
                      outline-none
                      placeholder:text-slate-700
                    "
                    placeholder="type a command..."
                    spellCheck="false"
                    autoCapitalize="none"
                    autoCorrect="off"
                  />
                </form>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 px-4 py-3 sm:px-5">
                <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[9px] text-slate-600 sm:text-[10px]">
                  <span>help</span>
                  <span>about</span>
                  <span>skills</span>
                  <span>projects</span>
                  <span>contact</span>
                  <span>clear</span>
                  <span>exit</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
