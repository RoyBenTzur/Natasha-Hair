export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display tracking-[0.18em] ${className}`}>
      NATA<span className="text-gold">S</span>HA
    </span>
  );
}
