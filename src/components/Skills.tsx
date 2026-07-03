import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiPython, SiGit,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

const skills = [
    {
        title: "Frontend",
        skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "Python", icon: SiPython },
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: "AWS", icon: FaAws },
            { name: "Git", icon: SiGit },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className=" px-6 py-24">
            <div className="max-w-5xl mx-auto">
                <p className="text-sm font-medium tracking-widest uppercase mb-2">
                    What I work with
                </p>
                <h2 className="text-3xl md:text4xl font-bold text-white mb-12">
                    Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category) => (
                        <div key={category.title} className ="bg-[#1A1A24] border border-white/5 rounded-2xl p-6">
                            <h3 className="text-white font-semibold mb-5">{category.title}</h3>
                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-3 text-white/60">
                                        <skill.icon size={18} className="text-[#4F8EF7]  flex-shrink-0" />
                                        <span className="text-sm">{skill.name}</span>
                                    </div>    
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}