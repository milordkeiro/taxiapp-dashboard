export default function RequestModal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed z-10 inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 mx-5 w-full max-w-3xl transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-300 hover:text-secondary bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x hover:stroke-secondary"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#26663f"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
