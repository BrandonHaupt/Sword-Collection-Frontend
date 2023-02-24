import { Link } from "react-router-dom";

export default function Post(props) {

  const post = props.post
  

  return <div className="sword-container">
    <Link to={`/post/${post.id}`}>
        <img className="sword-img" src={post.url} alt={post.name} />
        <h2>{post.name}</h2>
    </Link>
    <h3>{post.origin}</h3>
    <p>{post.details}</p>
  </div>;
};
