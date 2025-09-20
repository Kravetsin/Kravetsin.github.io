import { useState } from "react";
const initialTags = ["Work", "Personal", "Ideas"];

export default function TagManager() {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const deleteTag = (tagName: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagName));
  };

  return (
    <>
      <label htmlFor="">
        Search Tag:
        <input
          type="text"
          value={searchText}
          onChange={updateSearchText}
          className="outline-2"
        />
      </label>
      <ul>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <span>{tag}</span>
              <button
                onClick={() => deleteTag(tag)}
                className="bg-amber-600 rounded-2xl p-1 hover:animate-bounce"
              >
                &times;
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
