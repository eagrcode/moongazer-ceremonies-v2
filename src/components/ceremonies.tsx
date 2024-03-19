import CeremonySwiper from "./ceremony-swiper";

export default function ceremonies() {
  return (
    <section className="flex w-full justify-center px-4 py-28 bg-primary md:px-12 text-secondary">
      <div className="flex flex-col gap-8 items-center w-full max-w-screen-lg">
        <div className="flex flex-col gap-2 text-center">
          <h2>Ceremonies</h2>
          <em>view the services I offer</em>
        </div>
        <CeremonySwiper />
      </div>
    </section>
  );
}
