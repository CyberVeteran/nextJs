import Link from 'next/link'


const Navbar = () => {
    return (
        <nav>
          <Link href="/" >Main page</Link>
          <br/>
          <Link href="/tickets" >tickets page</Link>
        </nav>
      );
}
 
export default Navbar;