import Link from "next/link";

const Navbar = () => {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: "space-between",
    padding: "1rem"
  };

  return (
    <div style={styles}>
      <Link href="/about">
        <a>Home page</a>
      </Link>
      <Link href="/about">
        <a>About page</a>
      </Link>
      <Link href="/contact">
        <a>Contact page</a>
      </Link>
    </div>
  );
};
export default Navbar;
