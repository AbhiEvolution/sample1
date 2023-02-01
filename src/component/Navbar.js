import NavbarLink from "./navbar/NavbarLink";
function Navbar() {
  return (
    <>
      <div className="d-flex justify-content-start">
        <div className="px-3">
          <NavbarLink home="Home" />
        </div>
        <div className="px-3">
          <NavbarLink home="About" />
        </div>
        <div className="px-3">
          <NavbarLink home="Features" />
        </div>
      </div>
    </>
  );
}
export default Navbar;
