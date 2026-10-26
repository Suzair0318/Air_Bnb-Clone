"use client";

import { useEffect, useState } from "react";
import { AirbnbLogo, CloseIcon } from "./Icons";

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8s-1.6-.7-2.7-.7c-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.3 1 8.4.7 1 1.5 2.2 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7 1.8-1.1 2.5-2.1c.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.2-3.5zM14.5 6.5c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.7-1 2.6 1 .1 1.9-.5 2.6-1.2z" />
    </svg>
  );
}

type HostAuthCardProps = {
  onClose?: () => void;
};

export default function HostAuthCard({ onClose }: HostAuthCardProps) {
  const [contact, setContact] = useState("");

  return (
    <div className="relative w-full max-w-[400px] rounded-[24px] bg-white px-7 py-8 shadow-[0_8px_28px_rgba(0,0,0,0.18)] sm:px-8 sm:py-9">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#222] transition hover:bg-[#F7F7F7]"
          aria-label="Close"
        >
          <CloseIcon className="h-3 w-3" />
        </button>
      )}

      <div className="mb-5 flex justify-center text-[#FF385C]">
        <AirbnbLogo className="h-7 w-[90px]" />
      </div>

      <h1 className="mb-6 text-center text-[26px] font-semibold leading-tight tracking-tight text-[#222]">
        Log in or sign up
      </h1>

      <label className="mb-4 block">
        <span className="sr-only">Phone number or email</span>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Phone number or email"
          className="h-[52px] w-full rounded-[12px] border border-[#B0B0B0] px-4 text-[15px] text-[#222] outline-none transition placeholder:text-[#6A6A6A] focus:border-[#222] focus:shadow-[0_0_0_1px_#222]"
        />
      </label>

      <button
        type="button"
        className="flex h-[48px] w-full items-center justify-center rounded-[10px] bg-[#FF385C] text-[16px] font-semibold text-white transition hover:bg-[#D90B3E]"
      >
        Continue
      </button>

      <div className="my-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#DDDDDD]" />
        <span className="text-[12px] font-medium text-[#6A6A6A]">or</span>
        <div className="h-px flex-1 bg-[#DDDDDD]" />
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#DDDDDD] transition hover:bg-[#F7F7F7]"
          aria-label="Continue with Google"
        >
          <GoogleIcon />
        </button>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#DDDDDD] text-[#222] transition hover:bg-[#F7F7F7]"
          aria-label="Continue with Apple"
        >
          <AppleIcon />
        </button>
      </div>
    </div>
  );
}

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AuthModal({ open, onClose }: AuthModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        className="absolute inset-0 bg-black/45"
        aria-label="Close login dialog"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-[400px]">
        <HostAuthCard onClose={onClose} />
      </div>
    </div>
  );
}
