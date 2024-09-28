import { FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialButtons() {
  return (
    <ul className="text-primary flex flex-row">
        <li className="mx-2 text-2xl hover:transition-all hover:text-3xl duration-200"><a href="https://github.com/bogdanc64" target="_blank" rel="noreferrer"><FaGithub/></a></li>
        <li className="mx-2 text-2xl hover:transition-all hover:text-3xl duration-200"><a href="https://www.linkedin.com/in/bogdan-cosmin-maftei-412018215/" target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
    </ul>
    )
}

export default SocialButtons