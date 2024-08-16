export default function Login() {
  return (
    <>
      <div className="fixed-background"></div>
      <main className="relative flex flex-wrap justify-center items-center h-full">
        <div className="bg-white rounded-xl flex flex-wrap justify-center items-center max-w-[820px] w-full">
          <div className="login-img w-2/5 hidden md:block"></div>
          <div className="w-full p-10 md:w-3/5 md:px-12 md:py-7">
            <img
              src="/assets/img/taxiapp-logo.svg"
              alt="logo"
              className="m-auto w-24"
            />
            <div className="ml-4 uppercase font-medium text-4xl">Taxi App</div>
            <h1 className="text-2xl font-light text-center my-8">
              Panel Administrativo
            </h1>
            <form className="text-left">
              <div className="mb-3">
                <label>Username</label>
                <input
                  className="w-full border border-gray-300 p-2"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  className="w-full border border-gray-300 p-2"
                  type="password"
                />
              </div>
              <div className="text-center mt-5">
                <button className="bg-secondary py-2 px-4 rounded-full w-full max-w-36 text-white uppercase">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
