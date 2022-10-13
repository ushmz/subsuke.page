import Image from "next/image";

type Props = {
  height: string | number;
  width: string | number;
};

const Icon: React.FC<Props> = ({ height, width }) => {
  return (
    <Image
      className="mask mask-squircle drop-shadow-md"
      src="/img/subsuke.png"
      height={height}
      width={width}
    />
  );
};

export default Icon;
