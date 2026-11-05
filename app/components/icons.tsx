type IconProps = { className?: string };

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AppleIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.37 12.62c.02 2.13 1.87 2.84 1.89 2.85-.02.05-.3 1.04-.98 2.06-.59.88-1.21 1.75-2.18 1.77-.95.02-1.26-.57-2.35-.57-1.09 0-1.43.55-2.33.59-.93.04-1.64-.95-2.24-1.83-1.22-1.78-2.15-5.04-.9-7.24.62-1.09 1.73-1.78 2.94-1.8.92-.02 1.79.62 2.35.62.56 0 1.61-.77 2.71-.66.46.02 1.77.19 2.61 1.42-.07.04-1.56.91-1.54 2.79ZM14.6 6.65c.49-.59.82-1.41.73-2.23-.71.03-1.57.47-2.08 1.06-.46.53-.86 1.36-.75 2.16.8.06 1.62-.4 2.1-.99Z" />
    </svg>
  );
}

export function AndroidIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7.1 8.1 5.8 5.9a.5.5 0 0 1 .86-.5L8 7.7a9.3 9.3 0 0 1 8 0l1.34-2.3a.5.5 0 1 1 .86.5l-1.3 2.2a7.1 7.1 0 0 1 3.1 5.7H4a7.1 7.1 0 0 1 3.1-5.7ZM8 10.1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Zm8 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6ZM4 14h16v3.2a1.8 1.8 0 0 1-1.8 1.8H17v1.5a1 1 0 0 1-2 0V19h-6v1.5a1 1 0 0 1-2 0V19h-1.2A1.8 1.8 0 0 1 4 17.2V14Z" />
    </svg>
  );
}
