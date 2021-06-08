import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
     const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
         id: 1,
         text: 'Doctors Appointment',
         day: '4th of June @ 11:30PM',
         reminder: true,
    },
    {
         id: 2,
         text: 'Meeting at School',
         day: '12th of June @ 09:00AM',
         reminder: true,
    },
    {
         id: 3,
         text: 'Food Shopping',
         day: '4th of June @ 13:30PM',
         reminder: false,
    }
     ])

// Add Task
const addTask = (task) => {
     const id = Math.floor(Math.random() * 10000) + 1
     const newTask = { id, ...task }
     setTasks([...tasks, newTask])
}     

// Delete Task Function
const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !==id))
}

// Toggle Reminder
const toggleReminder = (id) => {
     setTasks(
          tasks.map((task) => 
               task.id === id ? { ...task, reminder: !task.reminder } : task ))
}

return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  )
  }

export default App;
