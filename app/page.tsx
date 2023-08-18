"use client";

import { useMemo, useState } from "react";

import CanvasAnimation from "@/components/canvas-animate";
import { Modal } from "@/components/ui/modal";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import ContactMe from "@/components/contact-me";
import Resume from "@/components/resume";
import Experiences from "@/components/experiences";

export default function Home() {
  const [select, setSelect] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onClick(name: string) {
    setSelect(name);
    setIsOpen(true);
  }

  function onClose() {
    setSelect("");
    setIsOpen(false);
  }

  let modalContent: React.ReactNode | null = null;

  switch (select) {
    case "AboutMe":
      modalContent = (
        <Modal title="About Me" isOpen={isOpen} onClose={onClose}>
          <AboutMe />
        </Modal>
      );
      break;
    case "Projects":
      modalContent = (
        <Modal title="Projects" isOpen={isOpen} onClose={onClose}>
          <Projects />
        </Modal>
      );
      break;
    case "Experiences":
      modalContent = (
        <Modal title="Experiences" isOpen={isOpen} onClose={onClose}>
          <Experiences />
        </Modal>
      );
      break;
    case "ContactMe":
      modalContent = (
        <Modal title="Contact Me" isOpen={isOpen} onClose={onClose}>
          <ContactMe />
        </Modal>
      );
      break;
    case "Resume":
      modalContent = (
        <Modal title="Resume" isOpen={isOpen} onClose={onClose}>
          <Resume />
        </Modal>
      );
      break;
    default:
      modalContent = null;
  }

  return (
    <main>
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div> */}
      {modalContent}
      {useMemo(
        () => (
          <CanvasAnimation onClick={onClick} />
        ),
        []
      )}
    </main>
  );
}
