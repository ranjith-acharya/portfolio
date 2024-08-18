import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import WordRotate from "./magicui/word-rotate";

const Header = () => {
  return <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            {/* logo */}
            <h1 className="text-3xl font-semibold">
            {/* <span className="text-accent">&lt;</span>ranjith <span className="text-accent">/&gt;</span> */}
            ranjith
            <WordRotate
                className="inline-block text-3xl font-semibold text-accent"
                words={["_dev", "();", "./"]}
              />
            </h1>
        </Link>
        {/* navigation bar */}
        <div className="hidden lg:flex items-center gap-8">
            <Nav />
            <Link href="/">
                <Button>Hire me</Button>
            </Link>
        </div>

        {/* mobile navigation bar */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
    </div>
  </header>;
}

export default Header