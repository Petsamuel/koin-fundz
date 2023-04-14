import { useState, useEffect } from "react";
import { useGlobalState } from "../store";
import { Web3Button } from "@web3modal/react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const ConnectWalletButton = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  useEffect(() => {}, [connectedAccount]);
  return <Web3Button />;
};

export const Header = () => {
  const [updateNavbar, setUpdateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      setUpdateNavbar(true);
    } else {
      setUpdateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <Disclosure
      as="nav"
      className={
        updateNavbar
          ? "fixed z-40 w-screen bg-opacity-10 bg-gradient-to-r from-[#1f2658] to-[#272e5d] shadow-md"
          : "fixed z-40 w-screen"
      }
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-around">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mr-8">
                <div className="flex flex-shrink-0 items-center ">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="/"
                      className="text-gray-300 hover:bg-blueon hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="/about"
                      className="text-gray-300 hover:bg-blueon hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-blueon hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-blueon hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div className="flex justify-center">
                    <Menu.Button>
                      <ConnectWalletButton />
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="/"
                className="text-gray-300 hover:bg-blueon hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="text-gray-300 hover:bg-blueon hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="text-gray-300 hover:bg-blueon hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="text-gray-300 hover:bg-blueon hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Faq
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
