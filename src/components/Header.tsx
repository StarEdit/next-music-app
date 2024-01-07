import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { SwitchMode } from "@/components";

const Header = () => {
  return (
    <Navbar maxWidth="full" position="sticky" isBordered>
      <NavbarBrand>NCT</NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <SwitchMode />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
