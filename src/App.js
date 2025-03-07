import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "A",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "B",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "C",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [show, setShow] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShow() {
    setShow((value)=>!value)
  }

  function handleAddFriends(friend) {
    setFriends((prev) => [...prev, friend])
    setShow(false);
  }

  function handleSelection(friend) {
    setSelectedFriend(s => s?.id === friend.id ? null : friend);
    setShow(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends(f => f.map((fr) => {
         return fr.id === selectedFriend.id ? {...fr,balance:fr.balance + value} : fr
    }))
    // setSelectedFriend(null);
  }
  

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList lists={friends} onAdd={handleSelection} selectedFriend={selectedFriend} />
        <FormAddFriend show={show} handleAddFriends={handleAddFriends} />
        <Button onAdd={handleShow}>{show ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill friend={selectedFriend} handleSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
