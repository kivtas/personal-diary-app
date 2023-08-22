const EntryList = (props) => {
    const entries = props.entries;
    const title = props.title;
    return (
        <div className="entry-list">
            <h1>{title}</h1>
            {entries.map((entry) => (
                <div className="entry-preview" key={entry.id}>
                    <h2>{entry.title}</h2>
                    <p>{entry.date}</p>
                    <button onClick={() => props.handleDelete(entry.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default EntryList;