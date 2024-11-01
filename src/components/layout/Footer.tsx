import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.svg" alt="Motey" width={32} height={32} />
              <span className="text-xl font-bold">Motey</span>
            </Link>
            <p className="text-text-secondary">
              Elevate your Discord chats with custom emotes
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#how-it-works">How It Works</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/motey" className="hover:text-accent">
                <Twitter />
              </a>
              <a href="https://github.com/motey" className="hover:text-accent">
                <Github />
              </a>
              <a href="https://discord.gg/motey" className="hover:text-accent">
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Motey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 