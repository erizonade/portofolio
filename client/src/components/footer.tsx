import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Erizon.dev</h3>
          <p className="text-slate-400 mb-6">
            Software Developer | Flutter & Laravel Expert
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:erizonade2001@gmail.com"
              className="text-slate-400 hover:text-white text-xl transition-colors duration-200"
            >
              <Mail />
            </a>
            <a
              href="https://www.linkedin.com/in/erizon-adepratama-5751442a2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-xl transition-colors duration-200"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-xl transition-colors duration-200"
            >
              <Github />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Erizon Ade Pratama. All rights reserved. | Built with
              passion in Palembang, Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
