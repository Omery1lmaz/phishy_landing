'use client';

import React, {createContext, useContext, useState, useCallback, useEffect} from 'react';
import {X, CheckCircle2, AlertCircle} from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = 'info', duration: number = 2000) => {
      const id = Math.random().toString(36).substring(7);
      const newToast: Toast = {id, message, type, duration};

      setToasts((prev) => [...prev, newToast]);
    },
    []
  );

  return (
    <ToastContext.Provider value={{toasts, showToast, removeToast}}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({toasts, removeToast}) => {
  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
};

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({toast, onRemove}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 10);

    // Auto remove after duration
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        setIsRemoving(true);
        setTimeout(() => {
          onRemove(toast.id);
        }, 300);
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast.duration, toast.id, onRemove]);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(toast.id);
    }, 300);
  };

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return {
          border: 'border-white/10',
          bg: 'bg-white/[0.04]',
          text: 'text-white/90',
          icon: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
        };
      case 'error':
        return {
          border: 'border-white/10',
          bg: 'bg-white/[0.04]',
          text: 'text-white/90',
          icon: <AlertCircle className="h-5 w-5 text-red-400" />,
        };
      default:
        return {
          border: 'border-white/10',
          bg: 'bg-white/[0.04]',
          text: 'text-white/90',
          icon: <AlertCircle className="h-5 w-5 text-primary-400" />,
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div
      className={`
        pointer-events-auto
        rounded-xl
        border
        ${styles.border}
        ${styles.bg}
        ${styles.text}
        px-4
        py-3
        text-sm
        shadow-xl
        shadow-black/40
        backdrop-blur-xl
        flex
        items-center
        gap-3
        min-w-[320px]
        max-w-[420px]
        transition-all
        duration-300
        ease-in-out
        ${
          isRemoving
            ? 'translate-x-full opacity-0 scale-95'
            : isVisible
            ? 'translate-x-0 opacity-100 scale-100'
            : 'translate-x-full opacity-0 scale-95'
        }
      `}
    >
      <div className="flex-shrink-0">{styles.icon}</div>
      <p className="flex-1">{toast.message}</p>
      <button
        onClick={handleRemove}
        className="flex-shrink-0 rounded-lg p-1 hover:bg-white/10 transition-colors"
        aria-label="Close toast"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

