import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const EntryDetails = () => {
    const { id } = useParams();
    const {data: entry, Error, isPending} = useFetch('http://localhost:8000/entries/' + id);
    const history = useHistory();

    const handleClick= () => {
        fetch('http://localhost:8000/entries/' + entry.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="entry-details">
            { isPending && <div>Loading...</div> }
            { Error && <div>{ Error }</div> }
            { entry && (
                <article>
                    <h2>{ entry.title }</h2>
                    <div>{ entry.body }</div>
                    <div> {entry.date }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

            
        </div>
    );
}
export default EntryDetails;