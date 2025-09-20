import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface Props {
  items: AccordionItem[];
}

export default function Accordion({ items }: Props) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const changeIdx = (elIdx: number) => {
    setActiveIdx(activeIdx === elIdx ? null : elIdx);
  };

  return (
    <div>
      {items.map(({ title, content }, index) => {
        return (
          <div key={index} className="m-1.5">
            <button
              onClick={() => changeIdx(index)}
              className="bg-amber-600 rounded-2xl p-1.5"
            >
              {title}
            </button>
            {activeIdx === index && <p>{content}</p>}
          </div>
        );
      })}
    </div>
  );
}
