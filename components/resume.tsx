import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <div>
      <p className="mb-4">Do you want to download my resume?</p>
      <div className="flex justify-end">
        <a download href={"/peiyu_wu_resume.pdf"}>
          <Button variant={"secondary"}>Continue</Button>
        </a>
      </div>
    </div>
  );
}
