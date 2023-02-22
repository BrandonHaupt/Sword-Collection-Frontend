import { Link, useLoaderData, Form } from "react-router-dom";

export default function Show(props){
  const post = useLoaderData()

  return(
      <div className="show-container">
          <h1>{post.name}</h1>
          <img className="sword-img" src={post.url} alt={post.name} />
          <h2>{post.details}</h2>
          <div className="sword-form-container">
            <h2>Update Sword Info</h2>
            <Form action={`/update/${post.id}`} method="post">
              <input type="text" name="url" placeholder="Image for Sword" defaultValue={post.url}/>
              <input type="text" name="name" placeholder="Name of Sword" defaultValue={post.name}/>
              <input type="text" name="origin" placeholder="Origin of Sword" defaultValue={post.origin}/>
              <input type="text" name="details" placeholder="Details" defaultValue={post.details}/>
              <button>Update Sword</button>
            </Form>
            <Form action={`/delete/${post.id}`} method="post">
              <button>Delete the Sword</button>
            </Form>
          </div>
          <Link to="/">
            <button>Go Back</button>
          </Link>
      </div>
  )
};