"use client";

import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-tau-burgundy/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-tau-burgundy font-bold mb-4">Digital TAU</h3>
            <p className="text-sm text-foreground/60">
              {getTranslation(language, "about.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-tau-gold font-semibold mb-4">
              {getTranslation(language, "footer.contacts")}
            </h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a
                  href="mailto:contact@tau.edu.kz"
                  className="hover:text-tau-gold transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  contact@tau.edu.kz
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-tau-gold font-semibold mb-4">
              {getTranslation(language, "footer.social")}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-tau-gold transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-tau-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-tau-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Extra Info */}
          <div>
            <h4 className="text-tau-gold font-semibold mb-4">TAU University</h4>
            <p className="text-sm text-foreground/60">
              M.H. Dulati Taraz State University
            </p>
            <p className="text-xs text-foreground/40 mt-2">Taraz, Kazakhstan</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-tau-burgundy/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            {getTranslation(language, "footer.copyright")}
          </p>
          <div className="flex gap-6 text-xs text-foreground/40 mt-4 md:mt-0">
            <a href="#" className="hover:text-tau-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-tau-gold transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-tau-gold transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
