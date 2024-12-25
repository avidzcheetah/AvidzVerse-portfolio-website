import { Github, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    { icon: Github, href: 'https://github.com/avidzcheetah' },
    { icon: Linkedin, href: 'https://linkedin.com/in/avidz' },
    { icon: Facebook, href: 'https://facebook.com/avidzxv' },
    { icon: Instagram, href: 'https://instagram.com/avidz_cheetah' },
    { icon: Youtube, href: 'https://youtube.com/@avidzxv' }
  ];

  return (
    <div className="flex gap-6">
      {links.map(({ icon: Icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-primary)] transition-colors"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;