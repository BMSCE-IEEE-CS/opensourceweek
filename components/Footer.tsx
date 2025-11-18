import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-green-900/20 text-sm text-neutral-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <Image src="/club-logo.png" width={256} height={256} alt="logo" />
          <p className="text-xs text-neutral-400 mt-2">
            Fostering innovation and technical excellence.
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              href="https://www.instagram.com/bmsce_ieeecs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/bmsce-ieee-computer-society/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://github.com/BMSCE-IEEE-CS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://www.bmsceieeecs.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaGlobe size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold">Contact Us</h4>
          <div className="mt-3 space-y-4">
            <div>
              <div className="text-green-300 font-medium">Vageesh</div>
              <div className="text-xs text-neutral-400">Chairperson</div>
              <div className="text-xs text-neutral-400">
                BMSCE IEEE Computer Society
              </div>
              <a
                href="tel:+917338652387"
                className="text-xs text-neutral-400 hover:text-white"
              >
                +91 73386 52387
              </a>
            </div>
            <div>
              <div className="text-green-300 font-medium">Rishika</div>
              <div className="text-xs text-neutral-400">Treasurer</div>
              <div className="text-xs text-neutral-400">
                BMSCE IEEE Computer Society
              </div>
              <a
                href="tel:+919742813610"
                className="text-xs text-neutral-400 hover:text-white"
              >
                +91 97428 13610
              </a>
            </div>

            <div>
              <div className="text-green-300 font-medium">Mail</div>
              <a
                href="mailto:ieee.cs@bmsce.ac.in"
                className="text-xs text-neutral-400 hover:text-white"
              >
                ieee.cs@bmsce.ac.in
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Location</h4>
          <div className="w-full h-48 rounded-md overflow-hidden border border-green-900/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4182.13262126046!2d77.56423497539095!3d12.941615087370991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1763157355271!5m2!1sen!2sin"
              width="600"
              height="450"
              className="w-full h-full border-none"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-xs text-neutral-400 mt-2">
            BMS College of Engineering, Bull Temple Rd, Basavanagudi, Bengaluru,
            KA 560019
          </p>
        </div>
      </div>

      <div className="border-t border-green-900/10 py-4 text-xs text-neutral-300 text-center">
        Built by{" "}
        <Link
          href="https://www.bmsceieeecs.in"
          target="_blank"
          className="text-green-300 underline"
        >
          BMSCE IEEE Computer Society
        </Link>{" "}
        • Made with 💚 and Open Source
      </div>
    </footer>
  );
}
