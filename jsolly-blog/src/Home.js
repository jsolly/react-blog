import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  const [name, setName] = useState("Mario");

  const handleClick = () => {
    console.log("Hello World");
  };

  const handleClick2 = (name, e) => {
    console.log(`Hello World, ${name}`);
    console.log(e.target);
  };

  const handleClick3 = (e) => {
    console.log(e);
  };

  const handleClick4 = () => {
    setName("Luigi");
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{name}</p>
      <button onClick={handleClick} className="clickme">
        Click Me
      </button>
      <button onClick={() => console.log("I ran inline!")} className="clickme2">
        Click Me, too!
      </button>
      <button onClick={(e) => handleClick2("Mario", e)} className="clickme3">
        Click Me, three!
      </button>
      <button onClick={handleClick3} className="clickme4">
        Click Me, four!
      </button>
      <button onClick={() => handleClick4("Luigi")} className="clickme5">
        Change Mario to Luigi
      </button>

      {isPending && <div>...loading</div>}
      {error && <div>{error}</div>}
      {/* {blogs && <BlogList blogs={blogs} title="All The Blogs!" />} */}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="Mario's blogs"
        />
      )}
    </div>
  );
};

export default Home;
