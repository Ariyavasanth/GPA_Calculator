import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GradeChart({ subjects }) {
  const data = subjects.map((s) => ({
    name: s.subject,
    percentage: ((s.scored / s.total) * 100).toFixed(1),
  }));

  return (
    <div className="bg-white p-4 rounded shadow-[0_-3px_6px_rgba(0,0,0,0.16),_0_3px_6px_rgba(0,0,0,0.23)] max-w-3xl">
      {/* mx-auto */}
      <h2 className="text-xl font-bold mb-2">📈 Subject-wise Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="percentage" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
