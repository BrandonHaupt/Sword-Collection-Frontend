import url from "./urls";
import { redirect } from "react-router-dom";


// const generateSwordObject = async (request) => {
//     const formData = await request.formData()

//     return{
//         url: formData.get('url'),
//         name: formData.get("name"),
//         origin: formData.get('origin'),
//         details: formData.get('details')
//     }
// }

// CREATES NEW SWORDS
export async function CreateAction({request}){
    //Grab the form data
    const formData = await request.formData()


    const newSword = {
        url: formData.get('url'),
        name: formData.get("name"),
        origin: formData.get('origin'),
        details: formData.get('details')
    }

    await fetch(url, {
        //What type of request is it
        method: "post",
        //What kind of data are we sending
        headers: {
            "Content-Type": "application/json"
        },
        // sends our data along with the request
        body: JSON.stringify(newSword)
    })

    return redirect('/')
}


// Updates Stuff
export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new sword
    const updateSword = {
      subject: formData.get("subject"),
      details: formData.get("details"),
    };
  
    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSword),
    });
  
    // redirect back to the index page
    return redirect("/");
}


// Deletes stuff
export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}