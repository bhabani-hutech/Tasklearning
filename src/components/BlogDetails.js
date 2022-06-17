import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const params = useParams();
  console.log(params);
  //const [searchParams] = useSearchParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    async function fetchBlog() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params}`
      );
      const data = await response.json();
      console.log(data);
      setBlog(data);
    }
    console.log(blog);
    fetchBlog();
  }, [params]);

  return (
    <div className="ml-5">
      <h1>Blog Details</h1>
      {Object.keys(blog).map((key) => (
        <div>
          <span>{key}:</span>
          <span>{blog[key]}</span>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
