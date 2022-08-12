import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header>
      <div className="flex">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/assets/img/logo.jpeg"
            alt="Medium Logo"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Follow</h3>
        </div>
      </div>
      <div></div>
      <div></div>
    </header>
  )
}

export default HeaderComponent;
