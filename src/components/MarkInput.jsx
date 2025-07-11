import { useState } from "react";

export default function MarkInput({ onAdd }) {
  const [subject, setSubject] = useState("");
  const [scored, setScored] = useState("");
  const [total, setTotal] = useState("");

  const handleAdd = () => {
    if (!subject || !scored || !total) return alert("Fill all fields");
    if (+scored > +total) return alert("Scored marks can't exceed total");

    onAdd({ subject, scored: +scored, total: +total });
    setSubject("");
    setScored("");
    setTotal("");
  };

  return (
    // max-w-md
    <div className=" p-4 flex flex-col rounded ">
      <div className="min-[768px]:flex">
        <input
          className="border p-2 m-1 w-full"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          className="border p-2 m-1 w-full"
          placeholder="Marks Scored"
          type="number"
          value={scored}
          onChange={(e) => setScored(e.target.value)}
        />
        <input
          className="border p-2 m-1 w-full"
          placeholder="Total Marks"
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </div>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded self-end hover:bg-blue-600"
      >
        ➕ Add Subject
      </button>
    </div>
  );
}
