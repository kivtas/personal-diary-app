import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();
    const getCurrentDate = () => {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('en-US', options);
    };
    const date = getCurrentDate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = { title, body, date };

        console.log(entry);

        fetch('http://localhost:8000/entries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entry),
        }).then(() => {
            console.log('Success');
            history.push('/');
        })
    }
    return (
        <div className="create">
            <h2>New Journal Entry</h2>
            <form onSubmit={handleSubmit}>
                <label>Entry Title: </label>
                <input
                    type = "text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>{date}</label>

                <button>Add blog</button>
            </form>
        </div>
    );
}
 
export default Create;