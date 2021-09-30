import Button from './Button'
import {useLocation} from "react-router-dom"
const Header = ({title, onAdd, showAddTask}) => {
    const location = useLocation()
    console.log("Header location is" + location.pathname)
    return (
        <header className='header'>
            <h1>{title}</h1>
            {
                location.pathname === '/' && <Button color = 'green' text = {showAddTask ?'Close':'Add'} onClick = {onAdd}/>
            }

        </header>
    )
}


Header.defaultProps = {
    title: 'Default'
}

export default Header