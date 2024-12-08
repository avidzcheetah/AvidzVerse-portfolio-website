import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--gradient-start)] via-[var(--color-background)] to-[var(--gradient-end)] text-[var(--color-text)]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-[var(--color-primary)]">Avidz</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)]">
              Engineering Minds, Securing Futures, and Building Innovative Solutions
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:avidu@pm.me"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Hire Me
              </a>
              <Link
                to="portfolio"
                smooth={true}
                className="border border-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-background)] text-[var(--color-text)] px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer"
              >
                View Work
              </Link>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/avidzcheetah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/avidz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://facebook.com/avidzxv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com/avidz_cheetah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com/@avidzxv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHMbCu7NozbXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726760565137?e=1739404800&v=beta&t=IPgk1YMCIJboO-ghkupLsN8bwURE5Rqh-hV2JYD7gUY"
              alt="Avidz"
              className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover border-4 border-[var(--color-primary)] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;