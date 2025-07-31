import data from '../MockData.json';
import TrendingSlider from '../components/Slider';
import { useMove } from '../hooks/useMove';

const SinglePage = ({ label }: { label: string }) => {
  const {
     showItem, 
    currentItem,
    setShowItem,
    filteredItems,
    playVideo,
    handleBack,
    formatDuration,
    handleChange 
  } = useMove({label})


  return (

    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden">
      {playVideo ? (
        <>

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          >
            <source src={`${currentItem.VideoUrl}`} type="video/mp4" />
          </video>

          <button
            onClick={handleBack}
            className="absolute top-15 left-25 z-20 bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70 transition"
          >
            Back
          </button>
        </>

      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: `url(/images/${currentItem.CoverImage})`,
          }}
        />
      )}
      {!playVideo &&
        <>
          <div className="h-full flex flex-col  px-10 max-w-[700px] space-y-6 mt-40">
            <h1 className="text-5xl font-extrabold">{showItem?.Title == undefined ? data.Featured.Title : showItem?.Title} </h1>
            <p className="text-lg text-gray-300">
              {showItem?.ReleaseYear == undefined ? data.Featured.ReleaseYear : showItem?.ReleaseYear}  {showItem?.MpaRating == undefined ? data.Featured.MpaRating : showItem?.MpaRating}{showItem?.Duration == undefined ? formatDuration(data?.Featured.Duration) : formatDuration(showItem?.Duration)}
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              {showItem?.Description == undefined ? data.Featured.Description : showItem?.Description}
            </p>
            <div className="flex gap-4">
              <button className="bg-[#f1f1f1] text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition cursor-pointer" onClick={handleChange}>Play</button>
              <button className="bg-[#1e23d7] text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-600 transition cursor-pointer">More Info</button>
            </div>
          </div>

          <div className="absolute bottom-0 left-15 w-full px-10 pb-6">
            <h2 className="text-xl font-bold mb-4">Trending Now</h2>
            <div className="w-full">
              <TrendingSlider items={filteredItems} onchange={(e: any) => setShowItem(e)} />
            </div>
          </div></>}
    </div>
  );
};

export default SinglePage;
