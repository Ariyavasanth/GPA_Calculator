import { useState } from "react";
import MarkInput from "./components/MarkInput";
import Result from "./components/Result";
import GradeChart from "./components/GradeChart";

function App() {
  const [subjects, setSubjects] = useState([]);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const clearAll = () => setSubjects([]);

  return (
    <div className="min-h-screen rounded-xl shadow-[0_-3px_6px_rgba(0,0,0,0.16),_0_3px_6px_rgba(0,0,0,0.23)] min-[768px]:m-12 bg-white">
      <h1 className="text-3xl p-6 col-span-4 font-medium mb-4 bottom border-gray-400 border-b-2">
        🎓 MarkMaster - GPA Calculator
      </h1>
      
      <div className="grid grid-cols-1 min-[768px]:grid-cols-2  gap-10 m-7 mb-0">
        <div className="flex flex-col gap-6">
          <MarkInput onAdd={addSubject} />
          {/* {subjects.length > 0 && ( */}

          <Result subjects={subjects} onClear={clearAll} />
        </div>

        <GradeChart subjects={subjects} />
      </div>

      {/* )} */}
    </div>
  );
}

export default App;
