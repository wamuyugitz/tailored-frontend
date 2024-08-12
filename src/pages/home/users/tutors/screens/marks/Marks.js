import { useState } from "react";
import ScreenHeader from "../../../../common/components/screenHeader/ScreenHeader";
import "./Marks.css";
import MarksAccordion from "./MarksAccordion";

export default function Marks({ handleModalType }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionItems = [
    {
      title: "English",
    },
    {
      title: "Mathematics",
    },
    {
      title: "Kiswahili",
    },
    {
      title: "Biology",
    },
    {
      title: "Chemistry",
    },
  ];
  return (
    <div className={"marks"}>
      <ScreenHeader
        title={"Marks"}
        btnText={"Add Marks"}
        handleModalType={() => handleModalType("form", "add-student")}
      />
      <div className="accordion" id="accordionExample">
        {accordionItems.map((item, index) => (
          <MarksAccordion
            key={index}
            index={index}
            activeIndex={activeIndex}
            handleToggle={handleToggle}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
