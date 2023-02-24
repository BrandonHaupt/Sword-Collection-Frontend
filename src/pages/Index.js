import { Form, useLoaderData } from "react-router-dom";
import Post from "../components/Post"
import AnvilImg from "../pages/img/Anvil.png"


export default function Index(props){
    const swords = useLoaderData()

    return(
        <>
            <header>
                <p className="company-title">He Who Smelt it Weaponry</p>
            </header>

            <div className="CreateSwordContainer">
                <h2>Add a Sword</h2>
                <img className="" src={AnvilImg} alt="anvil"/>

                <Form className="formCreate" action="/create" method="post">
                    <input type='text' name="url" placeholder="Image Url" />
                    <input type='text' name="name" placeholder="Name of Sword" />
                    <input type='text' name="origin" placeholder="Origin of Sword" />
                    <input type='text' name="details" placeholder="Details about Sword" />

                    <button>Add a New Sword</button>
                </Form>
            </div>

            <div className="main-container">
                {swords.map((post) => <Post key={post.id} post={post}/>)}
            </div>
        </>
    )

}