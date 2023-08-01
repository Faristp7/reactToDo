import { useState } from "react";

function App() {
  const [toDos, setTods] = useState([]);
  const [toDo, setTod] = useState("");

  return (
    <div className="flex justify-center items-center mt-10 md:mt-0 md:h-screen  md:bg-gradient-to-r from-indigo-100">
      <div className="p-4 border-2 rounded-xl w-96 shadow-lg bg-white">
        <div>
          <h3 className="font-bold text-3xl py-5">Todo App</h3>
        </div>
        <div className="">
          <div className="flex">
            <input
              type="text"
              id="first_name"
              value={toDo}
              onChange={(e) => setTod(e.target.value)}
              class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
              placeholder="Add your new todo"
            />
            <img
              onClick={() => setTods([...toDos, toDo])}
              src="/img/icons8-plus-30.png"
              alt="Add"
              className="w-5 h-5 cursor-pointer mt-2 ml-3 "
            />
          </div>
          {toDos.map((value) => {
            return (
              <div className="flex mt-5 justify-between transition-opacity">
                <div className="flex">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="ml-1 mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <p className="ml-2">{value}</p>
                </div>
                <div>
                  <img
                    src="/img/icons8-delete-30.png"
                    alt="delete"
                    className="w-5 h-5 cursor-pointer ml-3"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
