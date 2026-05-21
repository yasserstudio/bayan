const darkSvg = `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='4' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='8' y='4' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='12' y='4' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='4' y='8' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='12' y='8' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='4' y='12' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='8' y='12' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='12' y='12' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='28' y='4' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='36' y='8' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='32' y='12' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='44' y='44' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='48' y='44' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='52' y='44' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='44' y='48' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='52' y='48' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='44' y='52' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='48' y='52' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='52' y='52' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='24' y='28' width='3' height='3' fill='%230F2B3C'/%3E%3Crect x='28' y='32' width='3' height='3' fill='%230F2B3C'/%3E%3C/svg%3E")`;

const lightSvg = `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='4' width='3' height='3' fill='white'/%3E%3Crect x='8' y='4' width='3' height='3' fill='white'/%3E%3Crect x='12' y='4' width='3' height='3' fill='white'/%3E%3Crect x='4' y='8' width='3' height='3' fill='white'/%3E%3Crect x='12' y='8' width='3' height='3' fill='white'/%3E%3Crect x='4' y='12' width='3' height='3' fill='white'/%3E%3Crect x='8' y='12' width='3' height='3' fill='white'/%3E%3Crect x='12' y='12' width='3' height='3' fill='white'/%3E%3Crect x='28' y='4' width='3' height='3' fill='white'/%3E%3Crect x='36' y='8' width='3' height='3' fill='white'/%3E%3Crect x='32' y='12' width='3' height='3' fill='white'/%3E%3Crect x='44' y='44' width='3' height='3' fill='white'/%3E%3Crect x='48' y='44' width='3' height='3' fill='white'/%3E%3Crect x='52' y='44' width='3' height='3' fill='white'/%3E%3Crect x='44' y='48' width='3' height='3' fill='white'/%3E%3Crect x='52' y='48' width='3' height='3' fill='white'/%3E%3Crect x='44' y='52' width='3' height='3' fill='white'/%3E%3Crect x='48' y='52' width='3' height='3' fill='white'/%3E%3Crect x='52' y='52' width='3' height='3' fill='white'/%3E%3Crect x='24' y='28' width='3' height='3' fill='white'/%3E%3Crect x='28' y='32' width='3' height='3' fill='white'/%3E%3C/svg%3E")`;

export function QrPattern({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: variant === "light" ? lightSvg : darkSvg,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
