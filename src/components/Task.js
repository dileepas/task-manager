import {FaTimes} from "react-icons/fa";
import PropTypes from 'prop-types'

const Task = ({task, onDelete , toggleReminder}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder':'task'}`} onDoubleClick={() => toggleReminder(task.id)}>
            <h3>{task.text} <FaTimes style = {iconStyle} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

const iconStyle = {
    color:'red',
    cursor:'pointer'
}

Task.prototype = {
    toggleReminder: PropTypes.func.isRequired
}

export default  Task
