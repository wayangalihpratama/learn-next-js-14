import Image from "next/image";

const Home = () => {
  return (
    <div className="flex space-y-20 space-x-6 mt-10">
      <div className="flex-1 flex-col space-y-12">
        <h1 className="text-9xl drop-shadow-md">Full Stack Developer</h1>
        <p className="text text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          placerat tellus id sapien cursus, non pellentesque mi vulputate. Nam
          eget arcu dolor. Donec sollicitudin vel justo sed laoreet. Phasellus
          sagittis dui ac quam auctor accumsan.
          <br />
          <br />
          Nam quis nulla nisl. Phasellus non arcu vitae enim dictum vulputate et
          vitae justo. Vivamus a molestie nisi. Aenean dignissim dolor quis
          massa ultrices pellentesque. Curabitur faucibus convallis euismod.
          Vivamus eget nisi odio. Proin eros purus, feugiat at rutrum et, ornare
          at justo. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </p>
        <div className="flex space-x-6">
          <button className="p-4 min-w-28 rounded-md bg-amber-600 text-white">
            Learn More
          </button>
          <button className="p-4 min-w-28 rounded-md bg-neutral-600 text-white">
            Contact
          </button>
        </div>
        <div className="relative w-96 h-12 grayscale">
          <Image src="/images/brands.png" alt="brand image" fill />
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          className="bg-blend-multiply"
          src="/images/hero.png"
          alt="hero image"
          fill
        />
      </div>
    </div>
  );
};

export default Home;
