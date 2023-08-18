import { Project } from "@/components/ui/project";

export default function Projects() {
  const projects = [
    {
      title: "Creative Studio",
      description:
        "A creative generation product which results in a 50% streamlining of campaign implementation processes",
      skills: ["Nuxt.js", "Express.js", "MySQL"],
      image: "/creative_studio.png",
    },
    {
      title: "Demand Side Platform",
      description:
        "A new ad conversion feature of campaign management system which leaves a strong impression on esteemed clients like Rakuten and Casio",
      skills: ["React.js", "Ruby on Rail", "MySQL"],
      image: "/demand_side_platform.png",
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          skills={project.skills}
          image={project.image}
        />
      ))}
    </div>
  );
}
