export default function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-900 to-fuchsia-900 w-full h-14 flex items-center justify-between text-white space-x-5 px-10 font-semibold fixed">
        <div className="text-2xl text-sky-400 font-sans font-bold">
          REACT FORM
        </div>
        <div className="flex space-x-8">
          <a href="/home">Home</a>
          <a href="/">Register</a>
        </div>
      </div>
    </>
  );
}
