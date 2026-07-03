import {FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Bicycle shop POS",
        tag:"Fullstack",
        description:"A Web-based POS system for a bicycle shop that records sales, inventory, and produces reports based on historical data.",
        tech: ["React", "MySQL", "Tailwind CSS", "Node.js", "Express"],
        github:"https://github.com/dcmcamihan/bicycle-supply-frontend",
        image: "/project1.png",         
    },
    {
        title: "AquaAlinged water monitoring system",
        tag:"IOT",
        description:`A Web-based Water monitoring system that collects data from sensors
         and displays it near real time, with a notification system that alerts the user when some measurement sare met,
         and logging system for reports using historical data`,
        tech: ["React", "MySQL", "Tailwind CSS", "Express","Arduino"],
        github:"https://github.com/LegionRevenant/Aqua-Aligned",
        image: "/project2.png",         
    },
    {
        title: "DREye-net AWS Medical image storage",
        tag:"Fullstack",
        description:`A AWS integrated medical image storage system that is used in conjuction with the DREye-net AI system, allowing medical professionals
         to upload, view, and manage medical images securely in a cloud database`,
        tech: ["React", "Tailwind CSS", "AWS S3", "AWS RDS", "Express"],
        github:"https://github.com/JohnYncierto/DReye-repository",
        image: "/project3.png",         
    },
    {
        title: "Thesis: DREye-net retinal imaging AI Ensemble",
        tag:"AI Research",
        description:`A research project that uses an ensemble of CNN models to detect diabetic retinopathy in retinal images,
         with a web-based interface for medical professionals to upload and view images`,
        tech: ["Python", "Docker", "PyTorch", "Grad-cam", "StreamLit","ResNet", "Efficient-Net"],
        github:"",
        image: "/project4.png",         
    },

];

export default function Projects() {
    return (
        <section id="projects" className="px-6 py-24 bg-[#0D0D14]">
            <div className="max-w-5xl mx-auto">
                <p className="text-[#4F8EF7] text-sm font-medium tracking-widest uppercase mb-2">
                    Project's I've been involved with
                </p>
                <h2 className="text-3xl md:text4xl font-bold text-white mb-12">
                    Projects
                </h2>

                <div className="grid md:grid-col gap-6">
                    {projects.map((project) => (
                        <article 
                            key={project.title}
                            className="bg-[#1A1A24] border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-white/10 transition-colors duration-200"
                        >
                            {/* Image */}
                            <div>
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display= "none";
                                    }} 
                                />

                            </div>

                            {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-[#4F8EF7] bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full px-3 py-1">
                                            {project.tag}
                                        </span>
                                        <div className="flex items-center gap-3">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                className="text-white/30 hover:text-white transition-colors duration-200">
                                                <FaGithub size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-white/50 mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="text-xs text-white/30 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );

}