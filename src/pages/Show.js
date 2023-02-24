import { Link, useLoaderData, Form } from "react-router-dom";

export default function Show(props){
  const post = useLoaderData()

  return(
      <div className="show-container">

        <Link to="/">
          <button>Go Back</button>
        </Link>
          
      {/* 
        ############################################
        ################# Update ###################
        ############################################
      */}
        <section className="weapon-form-container">
          <h4>Update Weapon Info</h4>
          <Form className="sp-weapon-update" action={`/update/${post.id}`} method="post">
            <input type="text" name="url" placeholder="Image for the weapon" defaultValue={post.url}/>
            <input type="text" name="name" placeholder="Name of the weapon" defaultValue={post.name}/>
            <input type="text" name="origin" placeholder="Origin of weapon" defaultValue={post.origin}/>
            <input type="text" name="details" placeholder="Details for the weapon" defaultValue={post.details}/>
            <button>Update Weapon</button>
          </Form>

            {/* 
            ############################################
            ################# Delete ###################
            ############################################
            */}
          <Form action={`/delete/${post.id}`} method="post">
            <button>Delete the Weapon</button>
          </Form>
        </section>

        <section className="weapon-information-container">
          <h1>Name: {post.name}</h1>
          <img className="sword-img" src={post.url} alt={post.name} />
          <h2>Origin: {post.origin}</h2>
          <h3>{post.details}</h3>
        </section>


        
      </div>
  )
};