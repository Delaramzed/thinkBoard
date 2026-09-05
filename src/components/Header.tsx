

type Props = {
  search: string;
  setSearch: (value: string) => void;
  setIsFormOpen: (value: boolean) => void;
  toggleDarkMode: () => void;
  isDark: boolean;
};

function Header({
  search, setSearch, setIsFormOpen,toggleDarkMode,isDark,}: Props) {
  return (
    <header className="w-full min-h-20 border-b border-border pb-4 overflow-hidden">
      <nav className="flex h-full px-4 md:px-10 items-center justify-between pt-2">
        {/* Logo + Search */}
        <div className="flex flex-col md:flex-row md:gap-10">
          <h1 className="font-bold text-xl text-text pt-3 whitespace-nowrap">
            Think Board
          </h1>

          <div className="flex items-center gap-2">
            <input
              className="w-64 md:w-96 h-12 p-4 font-semibold text-gray-700 focus:outline-none rounded-2xl border border-border"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes..."
            />

            {/* Dark Mode - فقط موبایل */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-text"
            >
              {isDark ? (
                /* Moon */
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35404 8.27997C1.59404 11.7133 4.50738 14.5066 7.99404 14.66C10.454 14.7666 12.654 13.62 13.974 11.8133C14.5207 11.0733 14.2274 10.58 13.314 10.7466C12.8674 10.8266 12.4074 10.86 11.9274 10.84C8.66738 10.7066 6.00071 7.97997 5.98738 4.75997C5.98071 3.89331 6.16071 3.07331 6.48738 2.32664C6.84738 1.49997 6.41404 1.10664 5.58071 1.45997C2.94071 2.57331 1.13404 5.23331 1.35404 8.27997Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                /* Sun */
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99935 12.3333C10.3926 12.3333 12.3327 10.3932 12.3327 7.99996C12.3327 5.60673 10.3926 3.66663 7.99935 3.66663C5.60612 3.66663 3.66602 5.60673 3.66602 7.99996C3.66602 10.3932 5.60612 12.3333 7.99935 12.3333Z"
                    stroke="currentColor"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.7606 12.76L12.674 12.6734M12.674 3.32671L12.7606 3.24004ZM3.24065 12.76L3.32732 12.6734L3.24065 12.76ZM8.00065 1.38671V1.33337V1.38671ZM8.00065 14.6667V14.6134V14.6667ZM1.38732 8.00004H1.33398H1.38732ZM14.6673 8.00004H14.614H14.6673ZM3.32732 3.32671L3.24065 3.24004L3.32732 3.32671Z"
                    stroke="currentColor"
                    strokeWidth="1.55556"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* New Note + Dark Mode دسکتاپ */}
        <div className="flex items-center gap-2">
          <button
            className="
              bg-primary
              rounded-full
              w-12 h-12
              p-2
              hover:bg-primary-hover
              transition
              fixed bottom-5 right-5
              md:static
              md:rounded-3xl
              md:w-36
              md:h-10
            "
            type="button"
            onClick={() => setIsFormOpen(true)}
          >
            <span className="md:hidden text-2xl text-text">+</span>

            <span className="hidden md:inline font-bold text-text">
              New Note
            </span>
          </button>

          {/* Dark Mode - فقط دسکتاپ */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="hidden md:flex w-10 h-10 rounded-full items-center justify-center text-text"
          >
            {isDark ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.35404 8.27997C1.59404 11.7133 4.50738 14.5066 7.99404 14.66C10.454 14.7666 12.654 13.62 13.974 11.8133C14.5207 11.0733 14.2274 10.58 13.314 10.7466C12.8674 10.8266 12.4074 10.86 11.9274 10.84C8.66738 10.7066 6.00071 7.97997 5.98738 4.75997C5.98071 3.89331 6.16071 3.07331 6.48738 2.32664C6.84738 1.49997 6.41404 1.10664 5.58071 1.45997C2.94071 2.57331 1.13404 5.23331 1.35404 8.27997Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99935 12.3333C10.3926 12.3333 12.3327 10.3932 12.3327 7.99996C12.3327 5.60673 10.3926 3.66663 7.99935 3.66663C5.60612 3.66663 3.66602 5.60673 3.66602 7.99996C3.66602 10.3932 5.60612 12.3333 7.99935 12.3333Z"
                  stroke="currentColor"
                  strokeWidth="1.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.7606 12.76L12.674 12.6734M12.674 3.32671L12.7606 3.24004ZM3.24065 12.76L3.32732 12.6734L3.24065 12.76ZM8.00065 1.38671V1.33337V1.38671ZM8.00065 14.6667V14.6134V14.6667ZM1.38732 8.00004H1.33398H1.38732ZM14.6673 8.00004H14.614H14.6673ZM3.32732 3.32671L3.24065 3.24004L3.32732 3.32671Z"
                  stroke="currentColor"
                  strokeWidth="1.55556"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
