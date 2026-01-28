export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
          Skills
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 text-secondary-foreground">
          Technologies & Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Frontend",
              items: ["React", "Angular", "JavaScript", "HTML", "CSS", "Tailwind"],
            },
            {
              title: "Backend",
              items: ["Java", "Spring Boot", "Hibernate", "Python"],
            },
            {
              title: "Databases",
              items: ["MySQL", "PostgreSQL", "SQL"],
            },
            {
              title: "Tools & Platforms",
              items: ["Git", "SAP (OTC, GTS)", "Stripe", "REST APIs"],
            },
          ].map((group, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 border border-primary/30"
            >
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
