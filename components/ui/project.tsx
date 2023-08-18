import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export interface ProjectProps {
  title: string;
  description: string;
  skills: string[];
  image: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  skills,
  image,
}) => {
  return (
    <div className="flex">
      <div className="w-1/3 flex items-start justify-center">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="w-2/3 flex flex-col space-y-2">
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
        <div className="flex space-x-2 translate-y-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Project };
