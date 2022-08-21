import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/assets/img/logo.jpeg"
            alt="Medium Logo"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer">Sign in</h3>
        <h3 className="border border-green-600 px-4 py-1 rounded-full cursor-pointer">Sign up</h3>
      </div>
    </header>
  )
}

export default HeaderComponent;
