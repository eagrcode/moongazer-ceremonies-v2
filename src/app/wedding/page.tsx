export default function WeddingPage() {
  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden">
      <section className="flex w-full min-h-dvh bg-secondary mt-[72px]">
        <div className="flex flex-col gap-8 items-center text-center w-full max-w-screen-lg">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl">Weddings</h1>
              <em className="text-primary/80">your day, your choice, your dreams</em>
            </div>
            <p className="">
              Your ceremony can be held absolutely anywhere you like without the restrictions of a
              registry office or church. Once the legalities have been completed the sky’s the
              limit. I can create a ceremony unique to you both, the only limitations are your
              imagination.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2>Included with this ceremony</h2>
            <div className="flex flex-col w-full max-w-80 sm:flex-row sm:max-w-none gap-4 text-center">
              <p className="px-4 py-8 rounded-sm flex-1 bg-primary/10 backdrop-saturate-200">
                A ceremony written specifically for you, which tells your love story
              </p>
              <p className="px-4 py-8 rounded-sm flex-1 bg-primary/10 backdrop-saturate-150">
                Symbolic rituals and unique personal aspects can be included
              </p>
              <p className="px-4 py-8 rounded-sm flex-1 bg-primary/10 backdrop-saturate-200">
                A beautifully presented souvenir script as a keepsake of the day
              </p>
              <p className="px-4 py-8 rounded-sm flex-1 bg-primary/10 backdrop-saturate-150">
                All meetings, email and phone contact
              </p>
              <p className="px-4 py-8 rounded-sm flex-1 bg-primary/10 backdrop-saturate-200">
                Packages from £750
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
