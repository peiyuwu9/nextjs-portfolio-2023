import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-y-2">
      <div className="w-1/3 sm:w-full">
        <Image
          src="/profile.png"
          alt="Peiyu Wu"
          width={600}
          height={600}
          priority={true}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p>
          Full stack web developer with 3+ years of expertise in developing
          end-to-end business applications with a focus on UI/UX-driven frontend
          and business-oriented backend.
        </p>
        <p>
          Demonstrates critical-thinking and problem-solving capabilities to
          generate user-centric ideas and streamline project workflows.{" "}
        </p>
        <p>
          Proven leadership skills in managing teams, leveraging strong
          communication abilities to drive successful project completion and
          foster cross-functional relationships.
        </p>
        <div className="flex flex-row space-y-1 space-x-3 items-center flex-wrap">
          <p>Specializes in</p>
          <Badge>JavaScript</Badge>
          <Badge>React</Badge>
          <Badge>Node</Badge>
        </div>
      </div>
    </div>
  );
}
