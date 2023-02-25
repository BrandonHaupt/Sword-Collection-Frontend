import { Form, useLoaderData } from "react-router-dom";
import Post from "../components/Post"


export default function Index(props){
    const swords = useLoaderData()

    return(
        <>
            

            <section className="main-container">
                <aside className="CreateSwordContainer">
                    <h2>Add a Weapon</h2>

                    <Form className="formCreate" action="/create" method="post">
                        <input type='text' name="url" placeholder="Image Url" />
                        <input type='text' name="name" placeholder="Name of Weapon" />
                        <input type='text' name="origin" placeholder="Origin of Weapon" />
                        <input type='text' name="details" placeholder="Details about Weapon" />

                        <button>Add a New Weapon</button>
                    </Form>
                </aside>

                <section className="sword-card-container">
                    {swords.map((post) => <Post key={post.id} post={post}/>)}
                </section>
            </section>
           
        </>
    )

}