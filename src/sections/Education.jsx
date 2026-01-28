const educationList = [
    {
        level: "college",
        degree: "MBA – Business Analytics",
        institute: "Great Lakes Institute of Management",
        year: "2025 – Present",
        score: "Pursuing",
    },
    {
        level: "college",
        degree: "B.Tech – Computer Science & Engineering",
        institute: "SRM Institute of Science and Technology",
        year: "2019 – 2023",
        score: "88.3%",
    },
    {
        level: "High School",
        degree: "Higher Secondary (PCM)",
        institute: "SNMSSS School",
        year: "2017 – 2019",
        score: "85.8%",
    },
    // Later you can add school here
];


export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                    Education
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 text-secondary-foreground">
                    Academic Background
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {educationList.map((edu, idx) => (
                        <div
                            key={idx}
                            className={`glass rounded-2xl p-6 border animate-fade-in ${edu.level === "college"
                                ? "border-primary/40"
                                : "border-border/40 opacity-80"
                                }`}
                        >
                            <h3
                                className={`font-semibold ${edu.level === "college"
                                        ? "text-xl text-white"
                                        : "text-lg text-muted-foreground"
                                    }`}
                            >
                                {edu.degree}
                            </h3>
                            <p className="text-muted-foreground">{edu.institute}</p>
                            <p className="text-muted-foreground">{edu.year}</p>
                            <p className="mt-2 font-medium text-primary">
                                {edu.score}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

