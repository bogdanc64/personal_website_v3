import { FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialButtons() {
  return (
    <ul className="flex flex-row gap-4 text-secondary">
        <li>
          <a
            href="https://github.com/bogdanc64"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="block text-xl transition-colors duration-200 hover:text-primary"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bogdan-cosmin-maftei-412018215/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="block text-xl transition-colors duration-200 hover:text-primary"
          >
            <FaLinkedin />
          </a>
        </li>
    </ul>
    )
}

export default SocialButtons
