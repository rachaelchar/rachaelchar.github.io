export default function AboutMe() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid px-6 pb-8 justify-items-center">
        <div className="p-2">
          <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl text-primary md:text-6xl bold">
                Rachael Charewicz
              </h1>
              <h2 className="pb-8 text-xl text-gray-800 md:text-2xl">
                Full Stack Software Engineer
              </h2>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="grid flex-1 grid-cols-1 gap-8 pb-16 text-center justify-items-center md:grid-cols-2 lg:grid-cols-4">
              <div className="grid gap-4">
                <div className="bg-[url(/public/images/paper.png)] bg-white p-4 pb-6 rounded-sm shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-64">
                  <img
                    className="w-full h-48 object-cover mb-4"
                    src="./public/images/hike.jpg"
                    alt="dog in the woods"
                  />
                  <div className="text-center">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-800">
                      Dog Lover
                    </h5>
                    <p className="text-sm font-normal text-gray-700 leading-tight">
                      I'm a lifelong animal lover. My rescue dog Myla, is my
                      best friend! We love to go on walks and hikes together.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-[url(/public/images/paper.png)] bg-white p-4 pb-6 rounded-sm shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-64">
                  <img
                    className="w-full h-48 object-cover object-bottom mb-4"
                    src="./public/images/courts.jpg"
                    alt="tennis courts"
                  />
                  <div className="text-center">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-800">
                      Amateur Tennis Player
                    </h5>
                    <p className="text-sm font-normal text-gray-700 leading-tight">
                      Tennis is my favorite active hobby. I started playing in
                      high school just to stay in shape for my main sport (field
                      hockey) and I've been playing ever since!
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-[url(/public/images/paper.png)] bg-white p-4 pb-6 rounded-sm shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 max-w-64">
                  <img
                    className="w-full h-48 object-cover mb-4"
                    src="./public/images/ckc.jpg"
                    alt="purple ice cream in a dessert bowl with a silver spoon"
                  />
                  <div className="text-center">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-800">
                      Ice Cream Enthusiast
                    </h5>
                    <p className="text-sm font-normal text-gray-700 leading-tight">
                      I like to make fun and unusual ice cream flavors,
                      especially as gifts for friends and family. Some favorites
                      have been blueberry basil, sweet corn, and orange blossom
                      honey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-[url(/public/images/paper.png)] bg-white p-4 pb-6 rounded-sm shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-64">
                  <img
                    className="w-full h-48 object-cover mb-4"
                    src="./public/images/amateur artist.jpg"
                    alt="watercolor paints and paper on a table"
                  />
                  <div className="text-center">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-800">
                      Creative Hobbyist
                    </h5>
                    <p className="text-sm font-normal text-gray-700 leading-tight">
                      "Analog" hobbies are my go-to way to unplug. I enjoy
                      basically any creative hobby that requires design;
                      watercolors and embroidery are my current main interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
