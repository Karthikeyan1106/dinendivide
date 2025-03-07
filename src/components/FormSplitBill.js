import { useState } from "react"
import Button from "./Button";

function FormSplitBill({ friend,handleSplitBill }) {
    const [bill, setBill] = useState("");
    const [paidbyUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const paidByFriend = bill ? bill - paidbyUser : "";

    function handleBillChange(e) {
        const value = e.target.value;
        if (!isNaN(value) || value === "") {
            setBill(value);
        }
    }

    const handlePaidByUserChange = (e) => {
        const value = e.target.value;
        console.log(value);

        if (!isNaN(value) || value === "") {
            setPaidByUser(value > bill ? paidbyUser : value);
        }
    };


    function handleSubmit(e) { 
        e.preventDefault();
        if (!bill || !paidbyUser) return;

         handleSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidbyUser )
    }

    return (
        <form onSubmit={handleSubmit} className="form-split-bill">
            <h2>Split the bill with {friend.name}</h2>
            <label>Bill value</label>
            <input type="text" value={bill} onChange={handleBillChange} /> 
            <label>Your Expense</label>
            <input type="text" value={paidbyUser} onChange={handlePaidByUserChange} />
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
