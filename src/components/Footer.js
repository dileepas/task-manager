import {Link, useLocation} from "react-router-dom"
const Footer = () => {
    const location = useLocation()

    return (
        <footer>
            <p>This is copy right</p>
            {location.pathname === '/' && <Link to= '/about/123'>About</Link>}
        </footer>
    )
}
export default Footer