const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Fetch data error");
  }
  return res.json();
};

const Blog = async () => {
  const posts = await getData();

  return (
    <div className="py-10">
      <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((item) => (
          <article
            key={item.id}
            className="flex flex-col bg-white shadow-sm rounded-lg transition hover:shadow-lg overflow-hidden"
          >
            <div className="hidden md:block">
              <img
                alt="Blog"
                src={`https://placehold.co/600x400?text=${item.title.slice(
                  0,
                  10
                )}`}
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
                    {item.title}
                  </h3>
                </a>

                <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                  {item.body.slice(0, 95)}
                  {item.body.slice(0, 95).length < item.body.length
                    ? "..."
                    : ""}
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={`/blog/${item.id}`}
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
