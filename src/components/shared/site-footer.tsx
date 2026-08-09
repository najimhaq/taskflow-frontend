import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Logo } from './logo';
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Sign in', href: '/sign-in' },
  { label: 'Create account', href: '/sign-up' },
] as const;

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/najimhaq',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/haq-najim/',
    icon: FaLinkedin,
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/mdnajimulhaque',
    icon: FaDiscord,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className='border-t border-border bg-[#090E1B]'>
      <div className='mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16'>
        <div className='grid gap-10 md:grid-cols-[1fr_auto] md:items-start'>
          <div>
            <Logo showTagline />

            <p className='mt-5 max-w-sm text-sm leading-6 text-text-secondary'>
              A focused workspace for teams that want to plan clearly,
              collaborate calmly, and deliver meaningful work.
            </p>

            <div className='mt-6 flex items-center gap-3'>
              {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon;

                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`Visit TaskFlow on ${socialLink.label}`}
                    className='grid size-9 place-items-center rounded-lg border border-border text-text-secondary transition-all hover:-translate-y-0.5 hover:border-[rgba(129,117,255,0.6)] hover:bg-surface-elevated hover:text-text-primary'
                  >
                    <Icon className='size-4' />
                  </a>
                );
              })}
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:gap-x-16'>
            <div>
              <p className='mb-4 text-xs font-bold uppercase tracking-[0.14em] text-text-muted'>
                Explore
              </p>

              <div className='flex flex-col items-start gap-3'>
                {footerLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='font-medium text-text-secondary transition-colors hover:text-text-primary'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className='mb-4 text-xs font-bold uppercase tracking-[0.14em] text-text-muted'>
                Account
              </p>

              <div className='flex flex-col items-start gap-3'>
                {footerLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='font-medium text-text-secondary transition-colors hover:text-text-primary'
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href='mailto:hello@taskflow.dev'
                  className='inline-flex items-center gap-1 font-medium text-text-secondary transition-colors hover:text-text-primary'
                >
                  Contact
                  <ArrowUpRight className='size-3.5' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between'>
          <p>© {new Date().getFullYear()} TaskFlow. Built for focused teams.</p>

          <div className='flex items-center gap-4'>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Made with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
