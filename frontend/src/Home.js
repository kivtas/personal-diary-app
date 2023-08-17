import React, { useState } from 'react';
import EntryList from './EntryList';


const Home = () => {
    const [entries, setEntries] = useState([
        {title: "today sucked", date: '10/20/2023', content: "Yadad yada ydada", id: 1},
        {title: "today ruled", date: '10/21/2023', content: "hoi hoi hoi hoi", id: 2},
        {title: "today was meh", date: '10/22/2023', content: "blah blah blah", id: 3},

    ]);
    return (
        <div className="home">
            <EntryList entries={entries} title="All Entries"/>
        </div>  

    );
}
 
export default Home;