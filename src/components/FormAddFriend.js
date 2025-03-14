import { useState } from "react"
import Button from "./Button"

function FormAddFriend({ show,handleAddFriends }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !image) return;

        const id = crypto.randomUUID(); 
        const newFriend = {
            name, image: `${image}?=${id}`, balance: 0,
            id 
        }
        handleAddFriends(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
    <>
        { show && (<form onSubmit={handleSubmit} className = "form-add-friend" >
            <label>First Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Image URL</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            <Button>Add</Button>
            </form >)}
        </>
    )
}

export default FormAddFriend
