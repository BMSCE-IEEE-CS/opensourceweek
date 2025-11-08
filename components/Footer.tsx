import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-green-900/20 text-sm text-neutral-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Column 1: Club Info & Links */}
        <div>
          <h4 className="text-white font-semibold">BMSCE IEEE Computer Society</h4>
          <p className="text-xs text-neutral-400 mt-2">
            Fostering innovation and technical excellence.
          </p>
          <div className="flex gap-4 mt-4">
             {/* Add social links here if you have them */}
             {/* <a href="#" aria-label="LinkedIn">...</a> */}
             {/* <a href="#" aria-label="Instagram">...</a> */}
          </div>
        </div>

        {/* Column 2: Location */}
        <div>
          <h4 className="text-white font-semibold mb-3">Location</h4>
          <div className="w-full h-48 rounded-md overflow-hidden border border-green-900/30">
            <iframe
              title="BMSCE Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.358525164102!2d77.56372677580103!3d12.94888128736345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b16f21201%3A0x1da006d336d6c6f1!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1730999086001!5m2!1sen!2sin"
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
        
        {/* Column 3: Contacts */}
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

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-900/10 py-4 text-xs text-neutral-500 text-center">
        Built by BMSCE IEEE Computer Society • Made with 💚 and Open Source
      </div>
    </footer>
  );
}