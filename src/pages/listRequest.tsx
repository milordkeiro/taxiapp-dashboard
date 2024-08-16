import { useState } from "react";
import RequestModal from "../components/RequestModal";

export default function ListRequest() {
  const [open, setOpen] = useState(false);

  // const onClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      <div className="requests-container">
        <div className="requests-header grid justify-evenly align-middle text-gray-400">
          <div>ID</div>
          <div>Nombre</div>
          <div>Celular</div>
          <div>Detalles</div>
          <div>Fecha</div>
          <div>Estado</div>
          <div></div>
        </div>
        <div className="request-card grid justify-evenly align-middle">
          <div className="id-request flex flex-wrap justify-evenly align-space-around">
            2
          </div>
          <div className="name-request">Jose Perez</div>
          <div className="phone-request">70733141</div>
          <div className="details-request">
            <small>Quiero un taxi de suma urgencia</small>
          </div>
          <div className="date-request">
            <small>2024-08-13</small>
          </div>
          <div className="status-request">
            <span className="block px-3 py-1 bg-warning rounded-full text-white font-bold text-sm">
              PENDIENTE
            </span>
          </div>
          <div className="actions-request">
            <a className="cursor-pointer " onClick={() => setOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right hover:stroke-secondary"
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
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="request-card grid justify-evenly align-middle">
          <div className="id-request flex flex-wrap justify-evenly align-space-around">
            1
          </div>
          <div className="name-request">Marco Antonio Aguilar Gomez</div>
          <div className="phone-request">70733141</div>
          <div className="details-request">
            <small>Quiero un taxi para 6 personas con maletas incluidas</small>
          </div>
          <div className="date-request">
            <small>2024-08-13</small>
          </div>
          <div className="status-request">
            <span className="block px-3 py-1 bg-warning rounded-full text-white font-bold text-sm">
              PENDIENTE
            </span>
          </div>
          <div className="actions-request">
            <a className="cursor-pointer " onClick={() => setOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right hover:stroke-secondary"
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
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <RequestModal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-2xl font-medium text-left mb-2">
          Informacion de la solicitud
        </h2>
        <hr />
        <div className="flex flex-wrap justify-start items-center py-4">
          <div className="w-full md:w-1/2 text-left">
            <label>Nombre del cliente:</label>
            <br />
            <span className="font-semibold">Marco Antonio Aguilar Gomez</span>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <label>Celular:</label>
            <br />
            <span className="font-semibold">70733141</span>
          </div>
          <div className="w-full text-left mt-3">
            <label>Detalles del pedido:</label>
            <br />
            Quiero un taxi para 6 personas con maletas incluidas
          </div>
        </div>
        <hr />
        <div className="text-left">
          <h3>Ubicacion:</h3>
          Aqui el mapa...
        </div>
        <hr />
        <div className="flex flex-wrap justify-start items-center pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message-2 stroke-secondary"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#3a3a3a"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 9h8" />
            <path d="M8 13h6" />
            <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
          </svg>
          <br />
          <label>Mensaje de respuesta:</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2"
            name="message"
            id="message"
            placeholder="Mensaje..."
          />
        </div>
        <div className="flex flex-wrap justify-end items-center py-2">
          <button className="bg-secondary text-white px-6 py-2 rounded-full">
            Enviar
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-primary text-white px-6 py-2 rounded-full ml-2"
          >
            Cerrar
          </button>
        </div>
      </RequestModal>
    </>
  );
}
