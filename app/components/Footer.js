import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 border-t border-line px-5 py-7 sm:flex-row">
      <p className="text-center text-sm text-muted">
        © {new Date().getFullYear()} Majed Khalid Al-Thobaiti
      </p>

      <div className="flex items-center gap-6 text-2xl text-muted">
        <a
          href="https://www.linkedin.com/in/majed-khalid-1316a8276/"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="transition-colors hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <FaLinkedin aria-hidden="true" />
        </a>

        <a
          href="https://github.com/majed-khalid1"
          aria-label="GitHub"
          title="GitHub"
          className="transition-colors hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <FaGithub aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
