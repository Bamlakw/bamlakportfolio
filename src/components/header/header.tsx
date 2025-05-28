import classNames from 'classnames';
import styles from './header.module.scss';
import NavLinks from './NavLinks';
import { NavLink } from '@remix-run/react';
import { useRef, useState, useEffect } from 'react';

export interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;
    function onClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [mobileMenuOpen]);

  // Focus first link on open
  useEffect(() => {
    if (mobileMenuOpen) {
      const firstLink = menuRef.current?.querySelector('a');
      if (firstLink) (firstLink as HTMLElement).focus();
    }
  }, [mobileMenuOpen]);

  return (
    <div className={classNames(styles.root, className)}>
      <header
        className={classNames(
          'flex',
          'justify-between',
          'items-center',
          'px-12',
          'py-6',
          'w-full',
          styles.header1
        )}
      >
        <NavLink
          to="/"
          className={classNames(
            'hover:opacity-80',
            'transition-opacity',
            'no-underline',
            'outline-none',
            'focus:outline-none',
            'focus:ring-0',
            'ring-0',
            styles.navLink
          )}
        >
          <h1
            className={classNames(
              'gap-2.5',
              'p-2.5',
              'text-3xl',
              'leading-normal',
              'text-zinc-800',
              'flex items-center',
              "font-['SF_Pro_Display',sans-serif]",
              styles.header2
            )}
          >
            Bamlak W/tinsae
          </h1>
        </NavLink>

        {/* Desktop navigation */}
        <div className={styles.desktopNav}>
          <NavLinks />
        </div>

        {/* Mobile menu button */}
        <button
          ref={menuBtnRef}
          className={classNames(styles.menuButton, styles.mobileOnly)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
          type="button"
        >
          Menu
        </button>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={classNames(styles.mobileMenu, {
            [styles.open]: mobileMenuOpen,
          })}
          tabIndex={-1}
          aria-label="Mobile Navigation"
        >
          <NavLinks
            onLinkClick={() => setMobileMenuOpen(false)}
          />
        </div>
        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className={styles.overlay}
            aria-hidden="true"
          />
        )}
      </header>
    </div>
  );
};