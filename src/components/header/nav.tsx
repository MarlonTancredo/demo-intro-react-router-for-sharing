import { NavLink } from "react-router-dom"

const Nav = () => <nav className='is-flex is-flex-grow-1 is-align-items-center' style={{ width: '100%' }}>
    <ul style={{ width: '100%' }}
        className='is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/help"}>Help</NavLink>
    </ul>
</nav>;

export default Nav;