import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'

export default function About() {
    return (
        <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
                Hi! I'm <span className="text-white font-medium">Chinmay Murthy</span>, a Electrical and Computer Engineering student at the University of Washington. I'm also a software developer and robotics enthusiast with a passion for building intelligent systems that bridge the physical and digital worlds.
                I enjoy working across the stack, from embedded firmware and control systems to web applications and simulation.
            </p>

            <p className="text-gray-300 mb-4">
                Outside of engineering, I'm a committed musician. I play several instruments, including piano, alto saxophone, flute, french horn, and most recently the uillean bagpipes.
                I also compose and arrange music for my various ensembles and have experience scoring for film and video games.
            </p>

            <div className="mt-8">
                <a
                    href="/ChinmayMurthy_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                    My Resume
                </a>
            </div>

            <div className="mt-10 flex justify-center gap-6 text-gray-400">
                <a
                    href="https://www.linkedin.com/in/chinmaymurthy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={28} />
                </a>

                <a
                    href="https://github.com/pie474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="GitHub"
                >
                    <FaGithub size={28} />
                </a>

                <a
                    href="https://gitlab.com/cmurthy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="GitLab"
                >
                    <FaGitlab size={28} />
                </a>
            </div>
        </div>
    )
}
