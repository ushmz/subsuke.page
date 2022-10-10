import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Subsuke</h1>
          <p className="py-6">
            サブスクリプションサービスを管理できる無料のアプリです。
          </p>
          <p className="py-6">
            契約しているサブスクリプションサービスの情報を登録することで、月ごとの総支払額の計算や支払日のリマインドが行えます。
          </p>
          <div>
            <button className="btn bg-purple-900">Get iOS</button>
            <button className="btn bg-purple-900">Get Android</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
