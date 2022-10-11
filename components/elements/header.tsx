import Image from "next/image";

const Header: React.FC = () => {
  return (
    <section className="sticky flex items-center px-8 h-16">
      <a href="/">
        <Image
          className="mask mask-squircle drop-shadow-md"
          src="/img/subsuke.png"
          height="44rem"
          width="44rem"
        />
      </a>
      <div className="px-8">
        <nav className="flex-1 text-xs md:text-lg font-bold">
          <div className="hidden md:flex menu menu-horizontal gap-8">
            <span className="">
              <a href="/" className="dark:hover:text-slate-100 transition hover:duration-500 ease-in-out">Subsuke</a>
            </span>
            <span className="">
              <a href="/blog" className="dark:hover:text-slate-100 transition hover:duration-500 ease-in-out">Blog</a>
            </span>
            <span className="">
              <a href="/faq" className="dark:hover:text-slate-100 transition hover:duration-500 ease-in-out">FAQ</a>
            </span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
