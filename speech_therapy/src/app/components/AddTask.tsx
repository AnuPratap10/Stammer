
export const AddTask = () => {
  return (
    <>
    
    <div className="card w-96 bg-base-100 shadow-xl p-10">
    <h1 className="text-2xl  ">Task Management App</h1>
      <input type="text" placeholder="title" className="input input-bordered input-success w-full max-w-xs mt-4 " />
      <textarea className="textarea textarea-accent mt-10" placeholder="Description"></textarea>
      <button className="btn btn-success mt-10" >Add</button>

    </div>
    </>
  )
}


// Title: A brief title describing the task.
// Description: A detailed description of the task.
// Status: The current status of the task 
// (e.g., "To Do," "In Progress," "Completed").