
export default function Home() {
  return (
      <div className="w-screen h-screen bg-slate-800 flex flex-col items-center justify-center">
          <h1 className="text-3xl">Hello World</h1>
          <form className="flex flex-col gap-4 items-center">
            <input type="text" placeholder="" className="p-2 rounded-md w-64" />
            <input type="text" placeholder="" className="p-2 rounded-md w-64" />
            <button className="bg-blue-600 w-48 p-2 rounded-md hover:bg-blue-700">Entrar</button>
          </form>
      </div>
  );
}
