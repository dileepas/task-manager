import {useState, useEffect} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import {BrowserRouter as Router, Route} from "react-router-dom"


const App = () => {

    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTask] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTask()
            setTask(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTask = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks',
            {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(task)
            })
        const data = await res.json()
        //const id = Math.floor(Math.random() * 1000) +1
        //const newTask = {id, ...task}
        setTask([...tasks, data])
        setShowAddTask(!showAddTask)
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
        setTask(tasks.filter((task) => task.id !== id))
        console.log('deleting.. ' + id)
    }

    const toggleReminder = (id) => {
        setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
        console.log('Toggle.. ' + id)
    }

    return (
        <Router>
            <div className='container'>
                {<Header title='Tracker Application'
                         onAdd={() => setShowAddTask(!showAddTask)}
                         showAddTask={showAddTask}/>}

                <Route path='/' exact render={() => (
                    <>
                        {showAddTask && <AddTask addTask={addTask}/>}
                        {tasks.length > 0 ?
                            <Tasks tasks={tasks}
                                   deleteTask={deleteTask}
                                   toggleReminder={toggleReminder}/>
                            : ('No Tasks to show')}
                    </>
                )}/>
                <Route path='/About' component={About}/>
                <Route path='/dileepa' component={Home}/>

                <Footer/>
            </div>
        </Router>
    );
}

const Home = () => {
    return (<div><h1>Dileepa</h1></div>)
};

export default App;
