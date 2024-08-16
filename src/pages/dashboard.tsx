import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="header w-full h-20 p-1 bg-white fixed flex justify-between items-center flex-wrap">
        <div className="logo-container w-1/4 text-left flex justify-start items-center flex-wrap ">
          <img src="/assets/img/taxiapp-logo.svg" alt="logo" className="logo" />
          <div className="ml-4 uppercase font-medium">Taxi App</div>
        </div>
        <nav className="w-3/4 text-right">
          <ul className="nav-list flex justify-end">
            <li className="nav-item">
              <a className="nav-link flex justify-center items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user-hexagon"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#3a3a3a"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                  <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                  <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                </svg>
                Administrador
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar-container">
        <div id="mainMenu" className="sidebar mt-2">
          <ul className="sidebar-list flex flex-row flex-wrap">
            <li className="sidebar-item w-full h-28 text-center py-2 flex flex-row flex-wrap justify-center items-center border-b relative">
              <a className="sidebar-link text-sm active" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-list-details mx-auto mb-2"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#3a3a3a"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M13 5h8" />
                  <path d="M13 9h5" />
                  <path d="M13 15h8" />
                  <path d="M13 19h5" />
                  <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                  <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                </svg>
                Solicitudes
              </a>
            </li>
            <li className="sidebar-item w-full h-28 text-center py-2 flex flex-row flex-wrap justify-center items-center border-b relative">
              <a className="sidebar-link text-sm" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-checkup-list mx-auto mb-2"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#3a3a3a"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  <path d="M9 14h.01" />
                  <path d="M9 17h.01" />
                  <path d="M12 16l1 1l3 -3" />
                </svg>
                Reporte
              </a>
            </li>
            <li className="sidebar-item w-full h-28 text-center py-2 flex flex-row flex-wrap justify-center items-center border-b relative">
              <a className="sidebar-link text-sm" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-logout mx-auto mb-2"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#3a3a3a"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M9 12h12l-3 -3" />
                  <path d="M18 15l3 -3" />
                </svg>
                Salir
              </a>
            </li>
          </ul>
        </div>
      </div>

      <main className="ml-40 mt-28">
        <div className="container">
          <h1 className="text-3xl font-medium text-left mb-2">Dashboard</h1>
          <hr />
          <Outlet />
        </div>
      </main>
    </>
  );
}
