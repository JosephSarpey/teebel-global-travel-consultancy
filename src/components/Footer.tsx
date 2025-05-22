import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-surface/50 md:mt-30">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Brand & Description */}
        <div className="flex-1">
          <div className="text-2xl font-bold text-brand mb-2">TeeBel Global Travel Consultants</div>
          <p className="text-muted text-sm max-w-xs">
            Your trusted partner for travel, documentation, and global opportunities. We make your journey smooth, secure, and memorable.
          </p>
        </div>
        {/* Links */}
        <div className="flex-1 flex flex-col gap-2">
          <span className="font-semibold text-secondary mb-1">Quick Links</span>
          <a href="#" className="text-brand hover:text-secondary text-sm">Destinations</a>
          <a href="#" className="text-brand hover:text-secondary text-sm">About Us</a>
          <a href="#" className="text-brand hover:text-secondary text-sm">Services</a>
          <a href="#" className="text-brand hover:text-secondary text-sm">Contact</a>
        </div>
        {/* Contact & Socials */}
        <div className="flex-1 flex flex-col gap-2">
          <span className="font-semibold text-secondary mb-1">Contact</span>
          <a href="mailto:info@tjtravel.com" className="text-brand hover:text-secondary text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" /> info@tjtravel.com
          </a>
          <div className="flex gap-4 mt-3">
            <a href="#" aria-label="Facebook" className="text-brand hover:text-secondary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-brand hover:text-secondary">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-brand hover:text-secondary">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-muted py-4 border-t border-border bg-surface">
        &copy; {new Date().getFullYear()} TeeBel Global Travel Consultants. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
