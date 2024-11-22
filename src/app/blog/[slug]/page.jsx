const getDetail = async ({ slug }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch detail");
  }
  return res.json();
};

const SingleBlog = async ({ params }) => {
  const slug = (await params).slug;
  const detail = await getDetail({ slug });

  return (
    <article className="w-full p-24 mx-auto space-y-8">
      <div className="w-full mx-auto space-y-4">
        <h1 className="text-5xl font-bold leading-none">{detail.title}</h1>
        <div className="flex flex-wrap space-x-2 text-sm">
          <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">
            #MambaUI
          </a>
          <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">
            #TailwindCSS
          </a>
          <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">
            #Angular
          </a>
        </div>
        <p className="text-sm">
          by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <span>Leroy Jenkins</span>
          </a>{" "}
          on <time dateTime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
        </p>
      </div>
      <div className="space-y-8">
        <img
          alt="Blog"
          src={`https://placehold.co/600x400?text=${detail.title}`}
          className="h-64 w-full object-cover"
        />
        <p>{detail.body}</p>
      </div>
    </article>
  );
};

export default SingleBlog;
