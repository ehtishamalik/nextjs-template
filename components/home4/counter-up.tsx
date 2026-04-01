"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CounterUp({
  count,
  time,
}: {
  count: number;
  time: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // runs only once
  });

  return (
    <div ref={ref}>{inView && <CountUp end={count} duration={time} />}</div>
  );
}
