import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Github, Heart } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Github, href: '#', label: 'Discord' },
  ];

  return (
    <footer className="bg-[#23272A] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] to-[#FF73FA] rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-full h-full bg-[#36393F] rounded-xl flex items-center justify-center">
                  <Image src="/logo.png" alt="Motey" width={24} height={24} />
                </div>
              </div>
              <span className="text-white font-bold text-xl">Motey</span>
            </Link>
            <p className="text-white/70 mb-6">
              Make your Discord server more fun with custom emotes! Express yourself in style.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-white/50 hover:text-[#5865F2] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Motey. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            Made with <Heart className="w-4 h-4 text-[#FF73FA]" /> by Discord Enthusiasts
          </div>
        </div>
      </div>
    </footer>
  );
} 