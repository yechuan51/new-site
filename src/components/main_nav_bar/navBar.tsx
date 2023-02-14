import { NextPage } from "next";
import Link from "next/link";
import styles from "./navBar.module.css";

export type NavBarItemType = {
  key: string;
  displayText: string;
  href: string;
};

export type NavBarCompPropsType = {
  items: NavBarItemType[];
};

const NavBarComp: NextPage<NavBarCompPropsType> = (props) => {
  const items = props.items;
  return (
    <nav className={styles.container}>
      <p className={styles.title}>
        <Link href="/">My website</Link>
      </p>
      <ul className={styles.navItemsList}>
        {items.map((item) => (
          <li key={item.key}>
            <Link href={item.href}>{item.displayText}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarComp;
