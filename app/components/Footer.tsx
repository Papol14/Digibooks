import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <footer className="bg-gray-200 text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" passHref legacyBehavior>
            <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10"
                width={40}
                height={40}
              />
              <span className="ml-3 text-xl">Byte Bazaar</span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Digibooks —
            <a
              href="https://github.com/papol14"
              className="text-gray-600 ml-1 hover:text-blue-500 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              @papol
            </a>
          </p>
          {isMounted && (
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61563455206172"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              <a
                href="*"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-500 hover:text-pink-600 transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </span>
          )}
        </div>
      </footer>
    </>
  );
};
export default Footer;
