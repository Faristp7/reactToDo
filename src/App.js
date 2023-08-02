import { useState } from "react";

function App() {
  const [toDos, setTods] = useState([]);
  const [toDo, setTod] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleDeleteTodo = (id) => {
    setTods(
      toDos.filter((obj) => {
        return obj.id !== id;
      })
    );
  };

  return (
    <div
      className={`flex justify-center items-center mt-10 md:mt-0 md:h-screen ${
        darkMode
          ? "bg-slate-900 text-white"
          : "md:bg-gradient-to-r from-indigo-100"
      } relative transition-all duration-300`}
    >
      <div className="absolute right-5 top-5 hidden md:block ">
        <img
          onClick={handleToggleTheme}
          src={darkMode ? "/img/icons8-sun-30.png " : "/img/icons8-moon-30.png"}
          alt={darkMode ? "sun" : "moon"}
          className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${
            darkMode ? "invert rotate-180" : ""
          }`}
        />
      </div>
      <div className="p-4 border-2 border-blue-200 rounded-xl w-96 shadow-lg ">
        <div>
          <h3 className="font-bold text-3xl py-5 dark:text-white">Todo App</h3>
        </div>
        <div>
          <div className="flex">
            <input
              type="text"
              id="first_name"
              value={toDo}
              onChange={(e) => setTod(e.target.value)}
              className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              placeholder="Add your new todo"
            />
            <img
              onClick={(e) => {
                if (toDo !== "") {
                  setTods([
                    ...toDos,
                    { id: Date.now(), text: toDo, status: false },
                  ]);
                }
                else{
                  e.target.classList.add("border-red-500")
                }
              }}
              src="/img/icons8-plus-30.png"
              alt="Add"
              className={`w-5 h-5 cursor-pointer mt-2 ml-3 transition-invert ${
                darkMode ? "invert" : ""
              }`}
            />
          </div>
          {toDos.map((obj) => {
            return (
              <div className="flex mt-5 justify-between transition-opacity">
                <div className="flex">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      setTods(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    className="ml-1 mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <p className="ml-2">{obj.text}</p>
                </div>
                <div>
                  <img
                    src="/img/icons8-delete-30.png"
                    alt="delete"
                    onClick={() => handleDeleteTodo(obj.id)}
                    className={`w-5 h-5 cursor-pointer ml-3 ${
                      darkMode ? "invert" : ""
                    }`}
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
