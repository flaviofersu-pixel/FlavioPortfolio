import { Mail, MapPin, Phone } from "lucide-react";
import { person } from "../../data/content";
import { ContactForm } from "../ContactForm";
import { LinkedInIcon } from "../LinkedInIcon";
import { SectionHeader } from "../SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-grape-950">
      <div className="w-full px-6 py-20 lg:px-12">
        <SectionHeader index="05" kicker="Say hello" title="Contact" />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-left">
            <p className="max-w-2xl text-lg leading-relaxed text-grape-300 lg:text-xl">
              I&apos;m looking for a full stack internship. If you have a role,
              a question, or just want to talk, send a message.
            </p>
            <ul className="mt-8 space-y-4 text-grape-300 lg:text-lg">
              <li>
                <a
                  href={person.phoneHref}
                  className="inline-flex items-center gap-3 hover:text-white"
                >
                  <Phone size={18} className="text-gold" aria-hidden="true" />
                  {person.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-3 hover:text-white"
                >
                  <Mail size={18} className="text-gold" aria-hidden="true" />
                  {person.email}
                </a>
              </li>
              <li>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-white"
                >
                  <LinkedInIcon size={18} className="text-gold" />
                  LinkedIn profile
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin size={18} className="text-gold" aria-hidden="true" />
                {person.location}
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-grape-700 bg-grape-900 p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
