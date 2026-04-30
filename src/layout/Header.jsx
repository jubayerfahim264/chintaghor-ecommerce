import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl shadow-sm bg-white/80">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8 border-b border-zinc-600"
        aria-label="Global">
        {/* Logo - Minimalist approach */}
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="flex items-center gap-2 group tracking-tighter">
            <div className="h-5 w-5 bg-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="h-2 w-2 bg-white rounded-full" />
            </div>
            <span className="text-[18px] font-normal text-zinc-900 tracking-tight">
              ChintaGhor
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 text-zinc-500"
            onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>

        {/* Desktop Nav - 400 Weight / Small Font */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <a
            href="/shop"
            className="text-[16px] font-normal leading-6 text-zinc-600 hover:text-zinc-950 transition-colors">
            Shop
          </a>
          <a
            href="/bundle"
            className="text-[16px] font-normal leading-6 text-zinc-600 hover:text-zinc-950 transition-colors">
            Bundle
          </a>
          <a
            href="/catalogue"
            className="text-[16px] font-normal leading-6 text-zinc-600 hover:text-zinc-950 transition-colors">
            Catalogue
          </a>
          <a
            href="/blog"
            className="text-[16px] font-normal leading-6 text-zinc-600 hover:text-zinc-950 transition-colors">
            Blog
          </a>
          <a
            href="/contact"
            className="text-[16px] font-normal leading-6 text-zinc-600 hover:text-zinc-950 transition-colors">
            Contact
          </a>
        </PopoverGroup>

        {/* Right side CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-5">
          <a
            href="/sign-in"
            className="text-[18px] font-normal text-zinc-600 hover:text-zinc-950 transition-colors">
            Sign in
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l border-zinc-100 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-normal tracking-tight">
              ChintaGhor
            </span>
            <button
              type="button"
              className="p-2 text-zinc-500"
              onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-zinc-100">
              <div className="space-y-1 py-6">
                <a
                  href="/shop"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-[14px] font-normal text-zinc-900 hover:bg-zinc-50">
                  Shop
                </a>
                <a
                  href="/bundle"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-[14px] font-normal text-zinc-900 hover:bg-zinc-50">
                  Bundle
                </a>
                <a
                  href="/catalogue"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-[14px] font-normal text-zinc-900 hover:bg-zinc-50">
                  Catalogue
                </a>
                <a
                  href="/blog"
                  className="text-[16px] font-normal leading-6 text-zinc-600 hover:text-zinc-950 transition-colors">
                  Blog
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-[14px] font-normal text-zinc-900 hover:bg-zinc-50">
                  Contact
                </a>
              </div>
              <div className="py-6 space-y-3">
                <a
                  href="/sign-in"
                  className="block text-center rounded-full border border-zinc-200 py-2 text-[14px] font-normal text-zinc-900">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <Outlet />
    </header>
  );
}
