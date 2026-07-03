
export default function Hero() {
    const roles = ["Fullstack Developer", "AWS learner", "CS student", ];

    return(
        <section id ="about" className="min-h-screen flex items-center pt-16 px6">
            <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-12 py-20">
                
                {/* Profile pic */}
                <div className="flex-shrink-0">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-[#1A1A24] border 
                    border-white/10 overflow-hidden flex items-center text-white/10 text-sm">
                        <img src="/Profile.png" alt="Profile picture" className="w-full h-full object-cover"/>
                    </div>
                </div>

                {/* Profile */}
                <div className="flex flex-col gap-5">
                    <p className="text-[#4F8EF7] text-sm tracking-widest uppercase">Hi, my name is</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">John Herbert Yncierto</h1>
                </div>

                {/* Roles */}
                <div className="flex flex-wrap gap-2">
                    {roles.map((role)=>(
                        <span key={role} className="px-3 py-1 text-sm text-[#4F8EF7] bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full">
                            {role}
                        </span>
                    ))}
                </div>

                <p className="text-white/50 leading-relaxed max-w-xl text-center">
                    Computer Science practitioner with a focus on web development. Proficient in Python, C++, 
                    HTML, CSS, JavaScript, TypeScript, and React. AWS Certified Cloud Practitioner with academic 
                    experience in databases, data analytics, and machine learning. Adaptable and eager to apply 
                    technical skills, solve problems, and continuously learn in a professional environment.
                </p>


                <div className="flex gap-3 mt-2">
                    <a href="#projects"
                    className="px-5 py-2.5 text-sm text-[#4F8EF7] hover:bg-[#3a7ae0] text-white text-sm font-medium rounded-lg transition-colors duration-200">
                        View my work
                    </a>
                    <a href="#contact"
                    className="px-5 py-2.5 text-sm text-[#4F8EF7] hover:bg-[#3a7ae0] text-white text-sm font-medium rounded-lg transition-colors duration-200">
                        Contact me

                    </a>
                </div>

            </div>
        </section>
    )
    
}