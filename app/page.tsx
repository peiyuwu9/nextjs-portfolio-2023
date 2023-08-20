"use client";

import { useCallback, useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import debounce from "lodash.debounce";

import AboutMe from "@/components/about-me";
import CanvasAnimation from "@/components/canvas-animate";
import ContactMe from "@/components/contact-me";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import { Loader } from "@/components/ui/loader";
import { Modal } from "@/components/ui/modal";

import { camelCaseSeperator } from "@/lib/utils";

export default function Home() {
  const [select, setSelect] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const showToast = useCallback((name: string) => {
    const message = camelCaseSeperator(name);
    toast(message, { id: "icon", duration: 1500 });
  }, []);

  const debouncedEvent = useCallback(
    debounce((name: string) => {
      showToast(name);
    }, 300),
    []
  );

  function onClick(name: string) {
    setSelect(name);
    setIsOpen(true);
  }

  function onClose() {
    setSelect("");
    setIsOpen(false);
  }

  function onHover(name: string) {
    debouncedEvent(name);
  }

  function onLoad() {
    setLoading(false);
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
    <>
      <main>
        {modalContent}
        {useMemo(
          () => (
            <CanvasAnimation
              classname={loading ? "opacity-0" : "opacity-100"}
              onClick={onClick}
              onHover={onHover}
              onLoad={onLoad}
            />
          ),
          [loading]
        )}
      </main>
      <Loader loading={loading} />
      <Toaster
        toastOptions={{
          style: {
            fontWeight: 600,
          },
        }}
      />
    </>
  );
}
