function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Projects</a>
        <a href="#" className="hover:text-blue-400">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
