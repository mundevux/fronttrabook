import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    const response = await fetch("https://backendtrabook.onrender.com/blog");
    const data = await response.json();
    setBlogs(data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <section className="container mx-auto py-5 mt-5 mb-16">
      <div className="mx-auto mb-4">
        <h2 className="text-black font-bold text-5xl secondary-font text-center pb-3">
          Get update with<span class="text-color-principal"> latest blog</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mb-5">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-4 px-0 shadow-lg rounded-lg w-52">
            <div className="card">
              <Image
                src={blog.imagenblog}
                alt=""
                className="object-cover rounded-t-lg w-full h-48"
                width={300}
                height={200}
              />
              <div className="card-img-overlay">
                <Button className="bg-color-principal border-0 px-4 py-2 rounded-1 mx-2 font-semibold shadow-personal">
                  Read More
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 px-3">
              <p className="my-0 font-semibold text-base">{blog.titulo}</p>
            </div>
            <div className="flex justify-between items-center mt-3 mb-4  px-3">
              <p className="my-0 text-color-secondary text-sm">{blog.fecha}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
