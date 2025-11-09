import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-green-900/20 text-sm text-neutral-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Column 1: Club Info & Socials */}
        <div>
          <h4 className="text-white font-semibold">BMSCE IEEE Computer Society</h4>
          <p className="text-xs text-neutral-400 mt-2">
            Fostering innovation and technical excellence.
          </p>
          {/* --- ADDED SOCIALS HERE --- */}
          <div className="flex gap-4 mt-4">
            <a 
              href="https://www.instagram.com/YOUR_HANDLE" // <-- Edit this link
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-neutral-400 hover:text-white"
            >
              Instagram
            </a>
            <a 
              href="https://www.linkedin.com/company/YOUR_HANDLE" // <-- Edit this link
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-neutral-400 hover:text-white"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/YOUR_HANDLE" // <-- Edit this link
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-neutral-400 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Column 2: Contacts (Moved from Col 3) */}
        <div>
          <h4 className="text-white font-semibold">Contact Us</h4>
          <div className="mt-3 space-y-3">
            <div>
              <div className="text-green-300 font-medium">Vaibhav Reddy</div>
              <div className="text-xs text-neutral-400">Event Coordinator</div>
              <a href="tel:+919999999999" className="text-xs text-neutral-400 hover:text-white">+91 9X-XXX-XXXX</a>
            </div>
            <div>
              <div className="text-green-300 font-medium">Ananya S</div>
              <div className="text-xs text-neutral-400">Logistics Head</div>
              <a href="mailto:ananya@bmsce.edu" className="text-xs text-neutral-400 hover:text-white">ananya@bmsce.edu</a>
            </div>
          </div>
        </div>

        {/* Column 3: Location (Moved from Col 2) */}
        <div>
          <h4 className="text-white font-semibold mb-3">Location</h4>
          <div className="w-full h-48 rounded-md overflow-hidden border border-green-900/30">
            <iframe
              title="BMSCE Location"
              src="http://googleusercontent.com/maps.google.com/4"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-xs text-neutral-400 mt-2">
            BMS College of Engineering, Bull Temple Rd, Basavanagudi, Bengaluru, KA 560019
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-900/10 py-4 text-xs text-neutral-500 text-center">
        Built by BMSCE IEEE Computer Society • Made with 💚 and Open Source
      </div>
    </footer>
  );
}
