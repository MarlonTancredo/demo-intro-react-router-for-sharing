import Header from "../header/header"
import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className='p-6' style={{ flex: '1' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default MainLayout