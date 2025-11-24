import classNames from 'classnames';
import styles from './header.module.scss';
import NavLinks from './NavLinks';
import { NavLink } from '@remix-run/react';
import { useRef, useState, useEffect, useLayoutEffect } from 'react';

export interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const [spacerHeight, setSpacerHeight] = useState<number>(0);

  // refs for scroll handling to avoid re-renders
  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const ticking = useRef<boolean>(false);

  // measure header height to set spacer so layout doesn't jump when header is fixed
  useLayoutEffect(() => {
    function measure() {
      const h = headerRef.current?.getBoundingClientRect().height ?? 0;
      setSpacerHeight(h);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

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

  // Scroll handler: hide on scroll down, show on scroll up
  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // small threshold to avoid jitter
      if (Math.abs(delta) < 8) {
        setIsScrolled(currentY > 8);
        return;
      }

      // At the top, always show header
      if (currentY <= 20) {
        setShowHeader(true);
        setIsScrolled(false);
        lastScrollY.current = currentY;
        return;
      }

      setIsScrolled(currentY > 8);

      // If mobile menu is open, keep header visible
      if (mobileMenuOpen) {
        setShowHeader(true);
        lastScrollY.current = currentY;
        return;
      }

      // If scrolling down and we've scrolled past a certain threshold, hide header
      if (delta > 0 && currentY > 80) {
        // scrolling down
        setShowHeader(false);
      } else if (delta < 0) {
        // scrolling up
        setShowHeader(true);
      }

      lastScrollY.current = currentY;
    }

    function onScroll() {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    // initialize
    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* fixed full-width header (header element spans the viewport) */}
      <div className={classNames(styles.root, className)}>
        <header
          ref={(el) => (headerRef.current = el)}
          className={classNames(
            styles.header1,
            isScrolled && styles.scrolled,
            !showHeader && styles.hidden
          )}
        >
          {/* inner container: constrains content and provides 40px gutters */}
          <div className={styles.inner}>
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
          </div>

          {/* Mobile menu (rendered outside inner so it can cover full width if needed) */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={classNames(styles.mobileMenu, {
              [styles.open]: mobileMenuOpen,
            })}
            tabIndex={-1}
            aria-label="Mobile Navigation"
          >
            <NavLinks onLinkClick={() => setMobileMenuOpen(false)} />
          </div>

          {/* Overlay */}
          {mobileMenuOpen && <div className={styles.overlay} aria-hidden="true" />}
        </header>
      </div>

      {/* spacer prevents content jump because header is fixed */}
      <div aria-hidden="true" style={{ height: spacerHeight }} />
    </>
  );
};

export default Header;