const data = [1, 2, 3, 4, 5, 6, 7];
const Blog = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <article
            key={item}
            className="flex flex-col bg-white shadow-sm rounded-lg transition hover:shadow-lg overflow-hidden"
          >
            <div className="hidden md:block">
              <img
                alt="Blog"
                src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between p-4">
              <div>
                <time
                  dateTime="2022-10-10"
                  className="text-xs font-bold uppercase text-gray-500"
                >
                  Oct 10, 2022
                </time>

                <a href="#">
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 hover:text-gray-700">
                    Finding the right guitar for your style - 5 tips
                  </h3>
                </a>

                <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href="#"
                  className="block w-full text-center bg-yellow-300 px-5 py-2 text-sm font-semibold uppercase text-gray-900 rounded-lg transition hover:bg-yellow-400"
                >
                  Read Blog
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
