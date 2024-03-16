import "./index.css";
import reactLogo from "./assets/react.svg";
import useLoading from "./useLoading";
import viteLogo from "/vite.svg";

const loadFunc = () => console.log("Loaded!");

function App() {
  const { loadClass, load, Spinner } = useLoading(2, {
    size: "60px",
    onLoad: loadFunc,
  });

  return (
    <>
      <div className={loadClass}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </div>
      <button onClick={load}>Toggle</button>
      <div>{Spinner}</div>
    </>
  );
}

export default App;
