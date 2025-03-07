import { useState } from "react"
import Button from "./Button";

function FormSplitBill({ friend,handleSplitBill }) {
    const [bill, setBill] = useState("");
    const [paidbyUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const paidByFriend = bill ? bill - paidbyUser : "";

    function handleSubmit(e) { 
        e.preventDefault();
        if (!bill || !paidbyUser) return;

         handleSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidbyUser )
    }
    return (
        <form onSubmit={handleSubmit} className="form-split-bill">
            <h2>Split the bill with {friend.name}</h2>
            <label>Bill value</label>
            <input type="text" value={bill} onChange={(e)=>setBill(+e.target.value)} /> 
            <label>Your Expense</label>
            <input type="text" value={paidbyUser} onChange={(e)=>setPaidByUser(+e.target.value > bill ? paidbyUser : +e.target.value)} />
            <label>{friend.name}'s Expense</label>
            <input type="text" value={paidByFriend} disabled />
            <label>Who's paying the bill</label>
            <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
            </select>
            <Button>Split bill</Button>
        </form>
    )
}

export default FormSplitBill
