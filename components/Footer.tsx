import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-green-900/20 text-sm text-neutral-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Column 1: Club Info & Socials */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Open Source Week</h3>
          <h4 className="text-white font-semibold">BMSCE IEEE Computer Society</h4>
          <p className="text-xs text-neutral-400 mt-2">
            Fostering innovation and technical excellence.
          </p>
          
          <div className="flex gap-4 mt-4">
            <a 
              href="https://www.instagram.com/bmsce_ieeecs/" // <-- Edit this link
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/bmsce-ieee-computer-society/" // <-- Edit this link
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a 
              href="https://github.com/BMSCE-IEEE-CS" // <-- Edit this link
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Contacts */}
        <div>
          <h4 className="text-white font-semibold">Contact Us</h4>
          <div className="mt-3 space-y-4">
            <div>
              <div className="text-green-300 font-medium">Vageesh</div>
              <div className="text-xs text-neutral-400">Chairperson
              BMSCE IEEE Computer Society</div>
              <a href="tel:+919999999999" className="text-xs text-neutral-400 hover:text-white">+91 73386 52387</a>
            </div>
            <div>
              <div className="text-green-300 font-medium">Rishika</div>
              <div className="text-xs text-neutral-400">Treasurer
              BMSCE IEEE Computer Society</div>
              <a href="mailto:ananya@bmsce.edu" className="text-xs text-neutral-400 hover:text-white">+91 97428 13610</a>
            </div>
            
            {/* --- ADDED THIS BLOCK --- */}
            <div>
              <div className="text-green-300 font-medium">Mail</div>
              <a 
                href="mailto:ieee.cs@bmsce.ac.in" 
                className="text-xs text-neutral-400 hover:text-white"
              >
                ieee.cs@bmsce.ac.in
              </a>
            </div>
            {/* --- END OF ADDED BLOCK --- */}

          </div>
        </div>

        {/* Column 3: Location */}
        <div>
          <h4 className="text-white font-semibold mb-3">Location</h4>
          <div className="w-full h-48 rounded-md overflow-hidden border border-green-900/30">
            <iframe
              title="BMSCE Location"
              src="http://googleusercontent.com/maps.google.com/7"
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
