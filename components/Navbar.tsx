import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-14 h-[68px] bg-[rgba(245,240,232,0.96)] backdrop-blur-[16px] border-b border-stone">
      <Link href="#" className="no-underline leading-none">
        <span className="font-bebas text-[26px] text-forest tracking-[0.1em] block">SKADI</span>
        <span className="text-[8px] font-medium tracking-[0.2em] text-mid uppercase block mt-0.5">
          Always on &nbsp;·&nbsp; Always closing
        </span>
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {[
          { label: "The Problem", href: "#problem" },
          { label: "How We Fix It", href: "#fix" },
          { label: "ROI Calculator", href: "#roi" },
          { label: "Pricing", href: "#pricing" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[13px] font-normal text-mid no-underline tracking-[0.02em] transition-colors duration-200 hover:text-forest"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className="text-[13px] font-medium px-6 py-2.5 bg-forest text-parchment rounded no-underline tracking-[0.04em] transition-colors duration-200 hover:bg-canopy"
      >
        Book a Demo
      </Link>
    </nav>
  );
}
