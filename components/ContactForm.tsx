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

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [msg, setMsg] = useState("");

  const send = () => {
    const subject = `Website enquiry: ${topic}${name ? " — " + name : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${msg}`;
    window.location.href = `mailto:admin@diligentfaith.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="form">
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-topic">I’m reaching out about</label>
        <select
          id="cf-topic"
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
          placeholder="A few lines about what you’re working on."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>
      <div>
        <button type="button" className="btn btn--dark" onClick={send}>
          Send message <span className="btn__arrow">→</span>
        </button>
      </div>
      <p className="form__note">
        This opens your email app with the message ready to send. Prefer email?
        Write to{" "}
        <a href="mailto:admin@diligentfaith.com">admin@diligentfaith.com</a>.
      </p>
    </div>
  );
}
