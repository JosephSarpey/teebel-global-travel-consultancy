import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="container m-auto flex flex-col justify-between min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default App;
