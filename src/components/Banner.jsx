import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
          Discover the beauty of plants at{" "}
          <span className="text-green-500">ArborAlly</span> – where nature thrives.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Delivering Plants. Delivering Happiness. At ArborAlly, we believe plants bring spaces to life & bring life to your spaces. We are on a mission to make beautiful, healthy & high-quality plants accessible to all plant enthusiasts across the country and be a one-stop shop for all their home gardening needs.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img 
          src={banner} 
          alt="Banner" 
          className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Banner;
