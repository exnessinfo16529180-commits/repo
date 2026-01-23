export function TAULogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F4091d659e9de4f4391608cd331a00811%2Ff385eb403e314218a8c0131deac15450?format=webp&width=800&height=1200"
      alt="TAU University Logo"
      width={size}
      height={size}
      className={`${className} object-contain`}
    />
  );
}
