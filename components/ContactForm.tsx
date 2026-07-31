"use client";

import { useState } from "react";

const TOPICS = [
  "Raising capital / investment",
  "A potential transaction (M&A)",
  "Advisory & strategy",
  "Joining the advisor network",
  "Media, events, or press",
  "Something else",
];

const FORM_NAME = "contact";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

/**
 * Netlify Forms submission. The markup below carries the attributes Netlify
 * looks for at deploy time (name, data-netlify, and the hidden form-name
 * field); submitting posts back to the site so enquiries are captured in the
 * Netlify dashboard and emailed on, with no mail app needed on the visitor's
 * machine.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": FORM_NAME,
          name,
          email,
          topic,
          message,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form-sent" role="status">
        <p className="eyebrow eyebrow--dim">Message sent</p>
        <p className="statement" style={{ marginTop: 16, maxWidth: "20ch" }}>
          Thank you — we&rsquo;ll be in touch.
        </p>
        <p className="form__note" style={{ marginTop: 18 }}>
          We&rsquo;ve received your message and will reply to{" "}
          <strong>{email || "the address you provided"}</strong> shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form"
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Tells Netlify which form this submission belongs to */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Spam honeypot — hidden from people, tempting to bots */}
      <p hidden>
        <label>
          Don&rsquo;t fill this in: <input name="bot-field" />
        </label>
      </p>

      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-topic">I&rsquo;m reaching out about</label>
        <select
          id="cf-topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Message</label>
        <textarea
          id="cf-msg"
          name="message"
          placeholder="A few lines about what you&rsquo;re working on."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          className="btn btn--dark"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send message"}{" "}
          <span className="btn__arrow">→</span>
        </button>
      </div>

      {status === "error" && (
        <p className="form__note form__note--error" role="alert">
          Sorry — something went wrong sending that. Please email us directly at{" "}
          <a href="mailto:admin@diligentfaith.com">admin@diligentfaith.com</a>.
        </p>
      )}

      <p className="form__note">
        We usually reply within a couple of working days. Prefer email? Write to{" "}
        <a href="mailto:admin@diligentfaith.com">admin@diligentfaith.com</a>.
      </p>
    </form>
  );
}
