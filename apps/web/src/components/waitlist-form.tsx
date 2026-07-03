"use client";

import { Button } from "@divinital/ui/components/button";
import { Input } from "@divinital/ui/components/input";
import * as React from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = React.useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          company: formData.get("company"),
        }),
      });

      if (!response.ok) {
        const data: unknown = await response.json().catch(() => null);
        const message =
          data && typeof data === "object" && "error" in data && typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again.";
        setStatus("error");
        setErrorMessage(message);
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="text-base font-medium text-accent">
        You&apos;re on the list. We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <Input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          aria-describedby={errorMessage ? "waitlist-error" : undefined}
          aria-invalid={status === "error" || undefined}
        />
        {/* Honeypot: hidden from real users; bots that fill it are silently dropped. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        {errorMessage ? (
          <p id="waitlist-error" role="alert" className="mt-2 text-sm text-accent">
            {errorMessage}
          </p>
        ) : null}
      </div>
      <Button type="submit" disabled={status === "submitting"} className="sm:shrink-0">
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
      </Button>
    </form>
  );
}
