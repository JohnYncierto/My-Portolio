const academics = [
    {
        date: "2023 - Present",
        title: "BS Computer Science",
        org: "Mapua Malayan Colleges Mindanao",
        description: "Currently pursuing a Bachelor's degree in Computer Science at Mapua Malayan Colleges Mindanao, focusing on software development, algorithms, and data structures.",
    }

]

const certifications = [
    {
        name: "AWS Certified Cloud Practitioner",
        org: "Amazon Web Services (AWS)",
        date: "2/5/2026",
    },
     {
        name: "IT Specialist - Data Analytics",
        org: "Certiport, a Pearson VUE business",
        date: "10/20/2025",
    },
     {
        name: "Microsoft Office Specialist: Excel Associate (Office 2019)",
        org: "Microsoft",
        date: "9/5/2023",
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <p className="text-[#4F8EF7] text-sm font-medium tracking-widest uppercase mb-2">
                    Experience
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                    My Journey
                </h2>

                {/* Academics Section */}
                <h3 className= "text-white/40 text-xs font-semibold tracking-widest uppercase mb-6">
                    Academics
                </h3>
                <div className="flex flex-col gap-0 mb-16">
                    {academics.map((academic,index) => (
                        <div key={index} className="flex gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 bg-[#4F8EF7] rounded-full mt-1.5 flex-shrink-0 ring-4 ring-[#4F8EF7]/30"/>
                            </div>

                            <div className="pb-8">
                                <span className=" text-xs text-white/30 font-medium tracking-wide">
                                    {academic.date}
                                </span>
                                <h4 className="text-lg text-white font-semibold mt-1">
                                    {academic.title}
                                </h4>
                                <p className="[#4F8EF7] text-sm">
                                    {academic.org}
                                </p>
                                <p className="text-white/50 text-sm leading-relaxed mt-2 max-w-xl">
                                    {academic.description}
                                </p>
                            </div>        
                        </div>
                    ))}
                </div>

                {/* Certifications Section */}
                <h3 className= "text-white/40 text-xs font-semibold tracking-widest uppercase mb-6">
                    Certifications
                </h3>
                <div className="flex flex-col gap-4">
                    {certifications.map((certification, index) => (
                        <div key={index} 
                        className="bg-[#1A1A24] border border-white/5 rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                        >
                            <div>
                                <p className="text-white font-medium">{certification.name}</p>
                                <p className="text-[#4F8EF7] text-sm">{certification.org}</p>
                            </div>    
                            <span className="text-white/30 text-xs flex-shrink-0">{certification.date}</span>    
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );

}