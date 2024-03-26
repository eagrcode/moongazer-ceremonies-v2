import CeremonySwiper from "./ceremony-swiper";

export default function ceremonies() {
  return (
    <section className="flex w-full justify-center pr-0 bg-primary text-secondary">
      <div className="flex flex-col gap-8 items-center w-full max-w-screen-xl">
        <div className="flex flex-col gap-2 text-center">
          <h2>Ceremonies</h2>
          <em>view the services I offer</em>
        </div>
        <CeremonySwiper />
      </div>
    </section>
  );
}
