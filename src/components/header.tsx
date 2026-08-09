type Props = {
  search: string;
  setSearch: (value: string) => void;
  setIsFormOpen: (value: boolean) => void;
 
};

function Header({ search, setSearch, setIsFormOpen}: Props) {
  return (
    <header className="w-full min-h-20 border-b border-gray-400 pb-4 overflow-hidden">
      <nav className="flex  h-full px-10 items-center justify-between pt-2 ">
        <div className="flex flex-col md:flex-row md:gap-10 ">
          <h1 className="font-bold text-xl text-black pt-3 whitespace-nowrap">
            Think Board
          </h1>
          <input
            className="w-96 h-12 p-4 font-semibold focus:outline-none rounded-2xl border border-gray-400 "
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notes..."
          />
        </div>

        <button
          className="bg-blue-500 rounded-full md:rounded-3xl w-36 h-10 p-2 hover:bg-blue-600 transition md:static fixed bottom-5 right-5"
          type="button"
          onClick={() => setIsFormOpen(true)}
        >
          <span className="sm:hidden text-2xl text-white ">+</span>
          <span className="hidden sm:inline font-bold text-white">
            New Note
          </span>
        </button>

      
      </nav>
    </header>
  );
}
export default Header;
