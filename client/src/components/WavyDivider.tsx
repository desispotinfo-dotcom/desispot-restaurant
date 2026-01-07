interface WavyDividerProps {
  flip?: boolean;
  color?: string;
}

export default function WavyDivider({ flip = false, color = "hsl(var(--background))" }: WavyDividerProps) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
      >
        <path
          d="M0 0C240 40 480 80 720 80C960 80 1200 40 1440 0V120H0V0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
