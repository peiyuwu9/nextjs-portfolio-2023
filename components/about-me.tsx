import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex flex-row-reverse">
      <div>
        <Image src="/profile.png" alt="Peiyu Wu" width={600} height={600} />
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
        <div className="flex space-x-2 items-center">
          <p className="mr-2">Specializes in</p>
          <Badge>JavaScript</Badge>
          <Badge>React</Badge>
          <Badge>Node</Badge>
        </div>
      </div>
    </div>
  );
}
