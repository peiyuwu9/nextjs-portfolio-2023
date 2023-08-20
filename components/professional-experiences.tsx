import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ProfessionalExperiences() {
  const experiences = [
    {
      company: "Vpon Big Data Group",
      date: "2020-2023",
      title: "Software Engineer",
      icon: "/vpon.png",
    },
    {
      company: "Taiwanese Junior Chamber of Commerce NY",
      date: "2020-2020",
      title: "Web Developer",
      icon: "/tjccny.jpeg",
    },
    {
      company: "Roman & Sunstone",
      date: "2015-2019",
      title: "Sourcing Assistant",
      icon: "/roman_sunstone.jpeg",
    },
  ];

  return (
    <VerticalTimeline animate={false} layout="1-column" lineColor="orange">
      {experiences.map((experience) => (
        <VerticalTimelineElement
          key={experience.company}
          contentStyle={{ background: "none", transform: "translateY(-9px)" }}
          contentArrowStyle={{ transform: "translateY(5px)" }}
          date={experience.date}
          icon={
            <Image
              src={experience.icon}
              alt={experience.company}
              width={50}
              height={50}
              priority={true}
              className="rounded-full"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            {experience.company}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {experience.title}
          </h4>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
