import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#111111] to-[#1a1a1a] text-white px-5 py-4 overflow-hidden font-[Segoe UI]">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#61dafb] via-[#ff4d4d] to-[#61dafb] z-10"></div>

      <div className="flex flex-wrap justify-between items-center gap-5 max-w-[1200px] mx-auto pb-2 z-20 relative">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#61dafb] text-lg font-semibold">
          Social Network
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-[#cccccc]">
          <a href="/" className="hover:text-[#61dafb] transition duration-300 px-1">Home</a>
          <a href="/aboutus" className="hover:text-[#61dafb] transition duration-300 px-1">About</a>
          <a href="/features" className="hover:text-[#61dafb] transition duration-300 px-1">Features</a>
          <a href="/developers" className="hover:text-[#61dafb] transition duration-300 px-1">Developers</a>
          <a href="/download" className="hover:text-[#61dafb] transition duration-300 px-1">Download</a>
          <span className="text-white/30 mx-1">|</span>
          <a href="/policies" className="hover:text-[#61dafb] transition duration-300 px-1">Legal</a>
          <a href="/privacy-policy" className="hover:text-[#61dafb] transition duration-300 px-1">Privacy</a>
          <a href="/terms-of-service" className="hover:text-[#61dafb] transition duration-300 px-1">Terms</a>
          <a href="/data-deletion" className="hover:text-[#61dafb] transition duration-300 px-1">Data Deletion</a>
        </div>

        <div className="flex gap-2">
          <SocialIcon href="https://www.facebook.com/aditya.kurani.1" color="#3b5998">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/aditya_kurani_26/" color="#e1306c">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://x.com/AdityaKurani" color="#1da1f2">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/aditya-kurani-818668176/" color="#0077b5">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://github.com/adi2687" color="#333">
            <FaGithub />
          </SocialIcon>
        </div>
      </div>

      <div className="text-center pt-2 border-t border-white/10 text-s text-[#999] max-w-[1200px] mx-auto z-20 relative">
        <p>
          {new Date().getFullYear()} Outfit AI. All rights reserved. |{" "}
          Created by {" "}
          <a href="https://www.linkedin.com/in/aditya-kurani-818668176/" className="text-[#61dafb] hover:text-[#ff4d4d] transition">
            Aditya Kurani
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, children, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Social"
    className="text-[#ccc] w-7 h-7 flex items-center justify-center rounded-full bg-white/10 transition-all hover:translate-y-[-2px]"
    style={{ transition: "all 0.3s ease" }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = color)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
  >
    {children}
  </a>
);

export default Footer;
