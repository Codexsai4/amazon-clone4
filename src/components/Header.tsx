"use client";
import Link from "next/link";
import { useBasket } from "@/context/BasketContext";

const Header = () => {
  const { items } = useBasket();

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link href="/">
            <img
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
              alt="Amazon Logo"
            />
          </Link>
        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 p-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Sign in</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <Link href="/checkout">
            <div className="relative link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="hidden md:inline font-extrabold text-sm mt-2">Basket</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
