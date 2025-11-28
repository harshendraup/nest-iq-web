import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent drop-shadow-xl">
          🎉✨ WELCOME TO NEST IQ! ✨🎉
        </h1>
      </main>
    </div>
  );
}
