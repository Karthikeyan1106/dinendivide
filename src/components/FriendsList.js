import Button from "./Button"

function FriendsList({ lists,onAdd,selectedFriend}) {
    return (
        <ul>
            {lists.map((list) => {
                
                const isSelected = selectedFriend?.id === list.id;

                return (
                    <li key={list.name} className={isSelected ? 'selected': ""}>
                        <img src={list.image} alt={list.name} />
                        <h3>{list.name}</h3>
                        {
                            list.balance < 0 && (
                                <p className="red">You owe {list.name} {Math.abs(list.balance)}</p>
                            )
                        }
                         {
                            list.balance > 0 && (
                                <p className="green"> {list.name} owe you {Math.abs(list.balance)}</p>
                            )
                        }
                         {
                            list.balance === 0 && (
                                <p> You and {list.name} are even!</p>
                            )
                        }
                        <Button onAdd={() => onAdd(list)} className="button">{isSelected ? 'Close' : "Select"}</Button>
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendsList
