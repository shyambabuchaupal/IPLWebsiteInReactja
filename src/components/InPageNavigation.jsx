import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const InPageNavigation = ({ teams, children }) => {
  console.log(children);
  const [index, setIndex] = useState(0);
  let tablineref = useRef();
  let btnRef = useRef();

  function togglebtn(btn, i) {
    let { offsetWidth, offsetLeft } = btn;
    tablineref.current.style.width = offsetWidth + "px";
    tablineref.current.style.left = offsetLeft + "px";

    setIndex(i);
  }

  useEffect(() => {
    togglebtn(btnRef.current, 0);
  }, []);
  return (
    <div className="w-full">
      <div className="bg-blue-800 w-full h-[100px]s flex justify-between items-end">
        {teams.length > 2
          ? teams.map(({ path, title }, i) => {
              return (
                <>
                  <Link to={path}>
                    <button
                      ref={i == 0 ? btnRef : null}
                      className={`hover:bg-gray-200/20 font-bold  rounded-sm mr-1 px-8 lg:px-16 text-sm py-5  text-center d-flex justify-center items-center ${
                        index == i ? "text-white bg-gray-200/20" : "text-gray-200"
                      }`}
                      onClick={(e) => togglebtn(e.target, i)}
                    >
                      {title}
                    </button>
                  </Link>
                </>
              );
            })
          : teams.map((data, i) => {
              return (
                <>
                  <button
                    ref={i == 0 ? btnRef : null}
                    className={`bg-gray-200 px-10 rounded-sm mr-4 pr-6 text-center d-flex justify-center items-center ${
                      index == i ? "text-black" : "text-gray-400"
                    }`}
                    onClick={(e) => togglebtn(e.target, i)}
                  >
                    {data}
                  </button>
                </>
              );
            })}

        <hr ref={tablineref} className="border-white absolute border-2 duration-300" />
      </div>
      {teams.length > 2 ? "" : children[index]}
    </div>
  );
};

export default InPageNavigation;
