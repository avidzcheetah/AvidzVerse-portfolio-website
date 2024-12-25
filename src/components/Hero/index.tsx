import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';
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
            <SocialLinks />
          </div>
          <div className="lg:w-1/2">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;