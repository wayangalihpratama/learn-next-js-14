import Image from "next/image";

const About = () => {
  return (
    <div>
      <div></div>
      <div className="h-96 w-96 relative">
        <Image src="/images/about.png" alt="about image" fill />
      </div>
    </div>
  );
};

export default About;
