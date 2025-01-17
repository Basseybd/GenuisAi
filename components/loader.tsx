import Image from "next/image";

export function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Loading"
          fill
          src="/logo.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="text-sm text-muted-foreground">Genius Is Thinking...</p>
    </div>
  );
}
