import React from 'react';
import ItemCard from './components/ItemCard';

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <p className="text-red-200">HELLO</p>
            <p className=""> {!data ? "Loading..." : data} </p>
            <ItemCard className="position:absolute width: 270px"></ItemCard>
            <ItemCard ></ItemCard>
            <ItemCard ></ItemCard>
            <ItemCard ></ItemCard>
            <ItemCard ></ItemCard>
        </div>
    );
}

export default App;
