import { useParams } from "react-router-dom";

const EntryDetails = () => {
    const { id } = useParams();
    return (
        <div className="details">
            <h2>Entry Details - { id }</h2>
        </div>
    );
}
 
export default EntryDetails;