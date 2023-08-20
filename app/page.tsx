"use client";

import { useCallback, useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import debounce from "lodash.debounce";

import AboutMe from "@/components/about-me";
import CanvasAnimation from "@/components/canvas-animate";
import ContactMe from "@/components/contact-me";
import ProfessionalExperiences from "@/components/professional-experiences";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import { Loader } from "@/components/ui/loader";
import { Modal } from "@/components/ui/modal";

import { camelCaseSeperator } from "@/lib/utils";

export default function Home() {
  const [select, setSelect] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const title = camelCaseSeperator(select);

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
      modalContent = <AboutMe />;
      break;
    case "Projects":
      modalContent = <Projects />;
      break;
    case "ProfessionalExperiences":
      modalContent = <ProfessionalExperiences />;
      break;
    case "ContactMe":
      modalContent = <ContactMe />;
      break;
    case "Resume":
      modalContent = <Resume />;
      break;
    default:
      modalContent = null;
  }

  return (
    <>
      <main>
        {modalContent && (
          <Modal title={title} isOpen={isOpen} onClose={onClose}>
            {modalContent}
          </Modal>
        )}
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
