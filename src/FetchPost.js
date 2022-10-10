import React, {useEffect, useState} from "react";

const postIds = [1, 2, 3, 4, 5, 6];

function fetchpost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
}

const FetchPost = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchpost(postIds[index])
      .then((post) => {
        setPost(post);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        console.warn(e.message);
        setError("error fetching data try again.");
        setLoading(false);
      });
  }, [index]);

  const incrementIndex = () => {
    setIndex((i) => (i === postIds.length - 1 ? i : i + 1));
  };

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return (
      <React.Fragment>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </React.Fragment>
    );
  }

  return (
    <div className='App'>
      <h1>{post.title}</h1>
      <p>{post.body} </p>
      {index === postIds.lenght - 1 ? (
        <p>NO More posts</p>
      ) : (
        <button onClick={incrementIndex}>Next Post</button>
      )}
    </div>
  );
};

export default FetchPost;
