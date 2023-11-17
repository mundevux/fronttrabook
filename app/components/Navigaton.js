import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import TrabookLogo from "../img/VectorLogo_Icon.svg";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Destination", "Tour", "Blog"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={TrabookLogo} alt="Trabook Logo" />
          <p className="secondary-font text-3xl font-bold text-inherit pl-2">
            Trabook
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 items-center justify-between">
        <NavbarItem>
          <Link className="hover:text-color-principal text-black" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="hover:text-color-principal text-black">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-color-principal text-black" href="#">
            Destination
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-color-principal text-black" href="#">
            Tour
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-color-principal text-black" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link href="#" className="text-color-principal">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-color-principal"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
