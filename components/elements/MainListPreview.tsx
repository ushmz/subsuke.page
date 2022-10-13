import Image from "next/image";

const MainListPreview: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 mx-16">
      <div className="flex justify-center items-center h-[683px] lg:h-[800px]">
        <div className="visible dark:invisible w-[342px] h-[683px] absolute">
          <Image src={"/img/preview/1_light.png"} width={342} height={683} />
        </div>
        <div className="invisible dark:visible w-[342px] h-[683px] absolute">
          <Image src={"/img/preview/1_dark.png"} width={342} height={683} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-3xl">契約サービスを一元管理</h2>
          <p className="text-lg">
            契約しているサービスを登録すれば、一月でいくら使っているかを計算できます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainListPreview;
