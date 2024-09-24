const ProgressBar = ({ className = "", padding = 2, progress = 0.5, height = 35 }) => {
  return (
    <div
      className={`${className} relative overflow-hidden rounded-xl bg-slate-200 flex`}
      style={{ height: `${height}px` }}
    >
      <div
        className={`absolute bg-sky-700 after-bar rounded-l-xl ${progress === 1 && "rounded-r-xl"}`}
        style={{
          width: `calc(${progress * 100}% - ${padding * 2}px)`,
          height: `calc(100% - ${padding}px)`,
          top: `${padding}px`,
          left: `${padding}px`,
        }}
      ></div>
      <span
        className="m-auto font-semibold text-lg z-10"
        style={{
          mixBlendMode: 'exclusion',
          color: 'white',
        }}
      >
        {progress * 100}%
      </span>
    </div>
  );
};

export default ProgressBar;