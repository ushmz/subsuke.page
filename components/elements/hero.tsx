import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <Image className="mask mask-squircle drop-shadow-md" src="/img/subsuke.png" height={200} width={200} />
          <h1 className="text-5xl font-bold">Subsuke</h1>
          <p className="py-6">
            サブスクリプションサービスを管理できる無料のアプリです。
          </p>
          <p className="py-6">
            契約しているサブスクリプションサービスの情報を登録することで、月ごとの総支払額の計算や支払日のリマインドが行えます。
          </p>
          <div className="flex">
            <button className="h-[100] w-[272] mx-4">
              <Image
                src="/img/app_store_badge/blk_ja.png"
                height={100}
                width={272}
              />
            </button>
            <button className="h-[100] w-[338] mx-4">
              <Image
                src="/img/google_play_badge.png"
                height={100}
                width={338}
                />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
