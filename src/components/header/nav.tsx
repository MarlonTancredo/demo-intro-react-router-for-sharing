import { Link } from "react-router-dom"

const Nav = () => <nav className='is-flex is-flex-grow-1 is-align-items-center' style={{ width: '100%' }}>
    <ul style={{ width: '100%' }}
        className='is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly'>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/help"}>Help</Link>
    </ul>
</nav>;

export default Nav;