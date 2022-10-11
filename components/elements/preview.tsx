import Image from "next/image";

const Preview: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Image src="/img/preview/1_dark.png" width={342} height={683} />
    </div>
  );
};

export default Preview;
