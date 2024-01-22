import avtar from "/images/avatar-jessica.jpeg"

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-DarkGrey">
      <section className="max-w-xl p-4 bg-OffBlack flex flex-col items-center rounded-md">
        <img src={avtar} alt="" className="w-16 rounded-full mb-2"/>
        <h1 className="font-semibold text-white text-xl">Jessica Randall</h1>
        <span className="text-Green mb-4">London, United Kingdom</span>
        <p className="text-white">"Front-end developer and avid reader."</p>
        <div className="flex flex-col gap-2 text-center text-white mt-2 w-full font-bold">
          <a href="" className="bg-Grey w-full p-2 rounded-lg cursor-pointer hover:bg-Green">GitHub</a>
          <a href="" className="bg-Grey w-full p-2 rounded-lg cursor-pointer hover:bg-Green"> Frontend Mentor</a>
          <a href="" className="bg-Grey w-full p-2 rounded-lg cursor-pointer hover:bg-Green">LinkedIn</a>
          <a href="" className="bg-Grey w-full p-2 rounded-lg cursor-pointer hover:bg-Green">Twitter</a>
          <a href="" className="bg-Grey w-full p-2 rounded-lg cursor-pointer hover:bg-Green">Instagram</a>
          
        </div>
      </section>
    </main>
  )
}