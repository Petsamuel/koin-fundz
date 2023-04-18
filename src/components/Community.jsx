import Socials from "./Socials";

function Community() {
  return (
    <section className="text-gray-500 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Koin Funds Community
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Join our community today and be part of a dynamic and inclusive
            crowdfunding ecosystem. Together, we can create a supportive and
            empowering environment where ideas can flourish, dreams can come
            true, and positive change can be made. Welcome to our vibrant and
            diverse community!
          </p>
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default Community;
