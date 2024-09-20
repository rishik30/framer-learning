import { archivoBlack } from "@/app/fonts";

export default function Home() {
  return (
    <div>
      <p className="font-semi-bold text-5xl uppercase text-foreground">
        Welcome To
      </p>
      <p
        className={`text-redPrimary text-7xl font-bold ${archivoBlack.className}`}
      >
        Framer Learning
      </p>
    </div>
  );
}
