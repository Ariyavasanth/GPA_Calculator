export default function Result({ subjects, onClear }) {
  const totalScored = subjects.reduce((sum, s) => sum + s.scored, 0);
  const totalMarks = subjects.reduce((sum, s) => sum + s.total, 0);
  const percentage = ((totalScored / totalMarks) * 100).toFixed(2);
  const gpa = (percentage / 9.5).toFixed(2);
  const grade =
    percentage >= 90
      ? "A+"
      : percentage >= 80
      ? "A"
      : percentage >= 70
      ? "B+"
      : percentage >= 60
      ? "B"
      : percentage >= 50
      ? "C"
      : "F";

  return (
    // max-w-md
    <div className="bg-white p-4 flex flex-col rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">📊 Result Summary</h2>
      <div className="flex flex-col gap-1 text-gray-400">
        <div className="flex justify-between">
          <p className="text-md">Total Marks Scored:</p>
          <span className="text-md font-bold">
            {totalScored} / {totalMarks}
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-md">Percentage:</p>
          <span className="text-md font-bold">{percentage}%</span>
        </div>

        <div className="flex justify-between">
          <p>GPA (Approx): </p>
          <span className="ml-[75%] text-md font-bold">{gpa}</span>
        </div>

        <div className="flex gap-1">
          <p className="text-lg font-semi  text-md font-bold">Grade:</p>
          <span className="text-xl text-black font-bold">{grade}%</span>
        </div>
      </div>
      <button
        onClick={onClear}
        className="mt-3 bg-red-500 self-end text-white px-4 py-2 rounded hover:bg-red-600"
      >
        🔄 Clear All
      </button>
    </div>
  );
}
