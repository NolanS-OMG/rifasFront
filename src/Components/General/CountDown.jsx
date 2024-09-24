import { useEffect, useRef, useState } from "react";

const TextWithTitle = ({ className = "", title, text }) => {
  return (
    <div className={`${className} relative`}>
      <p className="text-sm font-semibold text-center absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2">{title}</p>
      <p className="text-3xl font-black">{text}</p>
    </div>
  )
}

const CountDown = ({ className = "", seconds }) => {
  const [countdown, setCoundown] = useState(seconds);
  const format = useRef({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCoundown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
    }

    let total_min = parseInt(Math.floor(countdown / 60));
    let total_hours = parseInt(Math.floor(total_min / 60));
    let total_days = parseInt(Math.floor(total_hours / 24));

    format.current = {
      days: total_days,
      hours: total_hours % 24,
      minutes: total_min % 60,
      seconds: countdown % 60,
    }

  }, [countdown]);

  return (
    <div className={`${className} flex items-center gap-1`}>
      <TextWithTitle title={"Días"} text={format.current.days} className="px-1" />
      <span>:</span>
      <TextWithTitle title={"Hr"} text={format.current.hours} className="px-1" />
      <span>:</span>
      <TextWithTitle title={"Min"} text={format.current.minutes} className="px-1" />
      <span>:</span>
      <TextWithTitle title={"Secs"} text={format.current.seconds} className="px-1" />
    </div>
  )
}

export default CountDown;