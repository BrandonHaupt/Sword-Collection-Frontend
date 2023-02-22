import { Link } from "react-router-dom";

export default function Post(props) {

  const post = props.post
  

  return <div className="sword-container">
    <Link to={`/post/${post.id}`}>
        <h2>{post.name}</h2>
        <img className="sword-img" src={post.url} alt={post.name} />
    </Link>
    <h3>{post.origin}</h3>
    <p>{post.details}</p>
  </div>;
};
