import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
    return(
        <section id="contact" className="py-24 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-[#4F8EF7] text-sm font-medium tracking-widest uppercase mb-2">
                    Get in touch
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Let's Connect
                </h2>
                <p className="text-white/50 leading-relaxed mb-12">
                    I'm always open to new opportunities, internships, and interesting projects.
                    Whether you have a question or just want to say hi — my inbox is open.
                </p>
                
                 {/* Email button */}
                 <a href="https://mail.google.com/mail/?view=cm&to=jhyncierto@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8EF7] hover:bg-[#3a7ae0] text-white font-medium rounded-lg transition-colors duration-200 mb-12">
                    
                    <HiOutlineMail size={20} />
                    Say Hello
                </a>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-white/20 text-xs">or find me on</span>
                    <div className="flex-1 h-px bg-white/5" />
                </div>

                  {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          
            <a href="https://github.com/JohnYncierto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
            >
            <FaGithub size={20} />
            <span className="text-sm">GitHub</span>
            </a>
          
            <a href="https://www.linkedin.com/in/john-herbert-yncierto-ab0618294"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
            >
            <FaLinkedin size={20} />
            <span className="text-sm">LinkedIn</span>
            </a>
        </div>


            </div>

        </section>

    );

}