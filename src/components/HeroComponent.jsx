export const HeroComponent = () => {

  const imageUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2F1920x1080-px-landscape-Lofoten-Islands-nature-Norway-674444.jpg&f=1&nofb=1"

  return (
    <div className="parallax flex flex-col items-center justify-center"
         style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 1.0)), url(${imageUrl})`}}>
      <div className="text-center w-9/12 text-white font-bold font-sans text-2xl">
        <p className="py-5">
          A falsis, orgia brevis fraticinida
          A falsis, orgia brevis fraticinida
          A falsis, orgia brevis fraticinida
          A falsis, orgia brevis fraticinida
          A falsis, orgia brevis fraticinida
          A falsis, orgia brevis fraticinida
          A falsis, orgia brevis fraticinida
          A falsis, orgia brevis fraticinida
          A falsis, orgia brevis fraticinida
        </p>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-4/12">
        More Info
      </button>
    </div>
  )
}
