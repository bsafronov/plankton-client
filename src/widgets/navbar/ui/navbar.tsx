import { SignOutIconButton } from "~/features/sign-out";
import { navbarLinks } from "../consts/navbar-links";
import { AdminLink } from "./admin-link";
import { NavbarItem } from "./navbar-item";

export const NavbarWidget = () => {
  return (
    <nav className="border-x flex flex-col justify-between">
      <div className="border-b">
        {navbarLinks.map((item, i) => (
          <NavbarItem {...item} key={i} />
        ))}
        <AdminLink />
      </div>
      <div className="border-t size-12 flex justify-center items-center">
        <SignOutIconButton />
      </div>
    </nav>
  );
};
