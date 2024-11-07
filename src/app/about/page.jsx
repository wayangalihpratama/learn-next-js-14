import Image from "next/image";

const About = () => {
  return (
    <div className="flex space-y-20 space-x-6 items-center h-full">
      <div className="flex-1 flex flex-col space-y-12">
        <h2 className="text-3xl font-bold text-amber-700">About Me</h2>
        <h1 className="text-6xl font-bold drop-shadow-md">
          FastAPI - NextJS - Postgres - SocketIO - RabbitMQ
        </h1>
        <p className="text text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          placerat tellus id sapien cursus, non pellentesque mi vulputate. Nam
          eget arcu dolor. Donec sollicitudin vel justo sed laoreet. Phasellus
          sagittis dui ac quam auctor accumsan.
          <br />
          <br />
          Nam quis nulla nisl. Phasellus non arcu vitae enim dictum vulputate et
          vitae justo. Vivamus a molestie nisi. Aenean dignissim dolor quis
          massa ultrices pellentesque.
        </p>
        <div className="flex justify-between items-center p-5">
          <div>
            <h1 className="text-3xl font-bold text-amber-700">5+</h1>
            <p className="text-lg">Years of experience.</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-amber-700">5+</h1>
            <p className="text-lg">Years of experience.</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-amber-700">5+</h1>
            <p className="text-lg">Years of experience.</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1/2">
        <Image
          src="/images/about.png"
          alt="about image"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default About;
