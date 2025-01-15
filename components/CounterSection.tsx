import { useEffect, useState } from "react";

const counters = [
  { label: "Project Completed", target: 120 },
  { label: "Happy Client", target: 200 },
  { label: "Years Experience", target: 10 },
  { label: "Win Awards", target: 200 },
];

const CounterSection = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((counter, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < counter.target) {
            newCounts[index] += Math.ceil(counter.target / 100);
          } else {
            clearInterval(intervals[index]);
            newCounts[index] = counter.target;
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="bg-black text-white py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {counts.map((count, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-2">{count}K+</h2>
            <p className="text-xl">{counters[index].label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
