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
    <>
      {teams.length > 2
        ? teams.map(({path, title}, i) => {
            return (
              <>
                <Link to={path}>
                  <button
                    ref={i == 0 ? btnRef : null}
                    className={`bg-gray-200 px-10 rounded-sm mr-4 pr-6 text-center d-flex justify-center items-center ${
                      index == i ? "text-black" : "text-gray-400"
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

      <hr ref={tablineref} className="border-black relative duration-300" />
       {teams.length > 2 ? "" : children[index]}
    </>
  );
};

export default InPageNavigation;
