import {  AiFillDelete,AiFillEdit} from "react-icons/ai"

const TaskList = () => {
  return (
    <>
      <div className="border-2 p-5 mt-5" >
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
               
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>To Do</td>
                <td><AiFillEdit/></td>
                <td><AiFillDelete/></td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskList;
