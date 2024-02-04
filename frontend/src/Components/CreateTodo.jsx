/**
 * Component for creating a new todo
 * @returns {JSX.Element} - The rendered JSX element
 */
export function CreateTodo() {
    return (
        <div>
            {/* Input field for todo title */}
            <input 
                style={{
                    padding: 10, 
                    margin: 10, 
                    border: "2px solid black"
                }}
                type="text" 
                placeholder="Enter Title"
            />
            <br /> <br />
            {/* Input field for todo description */}
            <input 
                style={{
                    padding: 10, 
                    margin: 10, 
                    border: "2px solid black"
                }} 
                type="text" 
                placeholder="Enter the Description"
            />
            <br /> <br />
            {/* Button to create the todo */}
            <button>Create Todo</button>
        </div>
    )
}
