export default function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="  fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0F]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#about" className="font-bold text-lg tracking-tight text-white">
          JH<span className="text-[#4F8EF7]">.</span>
        </a>
        <ul className="flex items-center gap-2 md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs md:text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}