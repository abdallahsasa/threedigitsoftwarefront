import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary-bg pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.svg" alt="Three Digit Software" width={180} height={45} className="w-auto h-8 opacity-90" />
            </Link>
            <p className="text-muted-text mb-8 max-w-sm leading-relaxed">
              Three Digit Software is a premium software engineering firm building scalable websites, enterprise platforms, mobile applications, and AI solutions for industry leaders globally.
            </p>
            <div className="mb-8 space-y-3">
              <a href="tel:00905441060703" className="flex items-center gap-3 text-muted-text hover:text-primary-accent transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +90 544 106 0703
              </a>
              <a href="mailto:info@threedigitsoftware.com" className="flex items-center gap-3 text-muted-text hover:text-primary-accent transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@threedigitsoftware.com
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/three-digit-software/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-text hover:bg-primary-accent hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.facebook.com/ThreeDigitSoftware" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-text hover:bg-primary-accent hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://www.instagram.com/three.digit.software/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-text hover:bg-primary-accent hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-text hover:text-primary-accent transition-colors">About Us</Link></li>
              <li><Link href="/process" className="text-muted-text hover:text-primary-accent transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="text-muted-text hover:text-primary-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/web" className="text-muted-text hover:text-primary-accent transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile" className="text-muted-text hover:text-primary-accent transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/platforms" className="text-muted-text hover:text-primary-accent transition-colors">Business Platforms</Link></li>
              <li><Link href="/services/ai" className="text-muted-text hover:text-primary-accent transition-colors">AI & Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/work" className="text-muted-text hover:text-primary-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/industries" className="text-muted-text hover:text-primary-accent transition-colors">Industries</Link></li>
              <li><Link href="/technologies" className="text-muted-text hover:text-primary-accent transition-colors">Technologies</Link></li>
              <li><Link href="/insights" className="text-muted-text hover:text-primary-accent transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-muted-text hover:text-primary-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-text hover:text-primary-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-muted-text hover:text-primary-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-text text-sm">
            &copy; {new Date().getFullYear()} Three Digit Software. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-muted-text">Berlin</span>
            <span className="text-muted-text">&middot;</span>
            <span className="text-muted-text">Istanbul</span>
            <span className="text-muted-text">&middot;</span>
            <span className="text-muted-text">Riyadh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
