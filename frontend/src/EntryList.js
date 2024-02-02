import { Link } from "react-router-dom";

const EntryList = (props) => {
    const entries = props.entries;
    const title = props.title;
    return (
        <div className="entry-list">
            <h1>{title}</h1>
            {entries.map((entry) => (
                <div className="entry-preview" key={entry.id}>
                    <Link to={`/entries/${entry.id}`}>
                        <h2>{entry.title}</h2>
                        <div>{entry.date}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default EntryList;