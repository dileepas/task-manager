import {useState} from "react";

const AddTask = ({addTask}) => {

    let [text,setText] = useState('')
    let [day,setDay] = useState('')
    let [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert("Please add a task")
            return
        }
        addTask({text, day, reminder})
        setText = ''
        setDay = ''
        setReminder = false
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task name</label>
                <input type='text' placeholder='Task name'
                       value={text}
                       onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & time</label>
                <input type='text' placeholder='Day & Time' value={day}
                       onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder}
                       onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save' className='btn btn-block' />
        </form>
    )
}

export default AddTask