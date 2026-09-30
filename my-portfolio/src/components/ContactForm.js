import { useState } from "react";
import { person } from "../data/content";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 text-left">
      <label className="grid gap-2 text-sm text-grape-300 lg:text-base">
        Name
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="rounded-md border border-grape-700 bg-grape-950 px-3 py-2 text-white outline-none placeholder:text-grape-500 focus:border-gold"
        />
      </label>
      <label className="grid gap-2 text-sm text-grape-300 lg:text-base">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-md border border-grape-700 bg-grape-950 px-3 py-2 text-white outline-none placeholder:text-grape-500 focus:border-gold"
        />
      </label>
      <label className="grid gap-2 text-sm text-grape-300 lg:text-base">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="resize-y rounded-md border border-grape-700 bg-grape-950 px-3 py-2 text-white outline-none placeholder:text-grape-500 focus:border-gold"
        />
      </label>
      <button
        type="submit"
        className="rounded-md bg-grape-700 px-4 py-3 font-medium text-white transition hover:bg-grape-800 lg:text-lg"
      >
        Send message
      </button>
      {sent ? (
        <p className="text-sm text-gold">
          Your email app should open with the message ready to send.
        </p>
      ) : null}
    </form>
  );
}
