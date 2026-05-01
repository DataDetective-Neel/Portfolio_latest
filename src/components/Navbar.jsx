import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/cases', label: 'Case Files' },
  { to: '/toolkit', label: 'Toolkit' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' }
]

const linkClasses = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm transition-colors ${
    isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-200'
  }`

const Navbar = ({ isLight, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-6xl px-5 py-3 md:px-8 md:py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-base font-semibold tracking-wide text-slate-100">
            DataDetective
          </NavLink>
<nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-800"></nav>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-md border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
            aria-label="Toggle color theme"
          >
            {isLight ? 'Dark' : 'Light'}
          </button>
        </div>

        <div className="mt-2 flex gap-1 overflow-x-auto pb-1 md:hidden">
          {links.map((link) => (
            <NavLink key={`mobile-${link.to}`} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
