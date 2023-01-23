import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <Link href="/" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Meetups
          </Link>
          <div className={classes.pages}>
            <li>
              <Link href="/">All Meetups</Link>
            </li>
            <li>
              <Link href="/new-meetup">Add New Meetup</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
