import EntryList from './EntryList';
import useFetch from './useFetch';


const Home = () => {
    // temporary entries; will be initialized via an API call later
    const {data: entries, isPending, Error} = useFetch('http://localhost:8000/entries');
    return (
        <div className="home">
            { Error && <div>{ Error }</div>}
            { isPending && <div>Loading...</div> }
            { entries && <EntryList entries={entries} title="All Entries"/>}
        </div>  

    );
}
 
export default Home;