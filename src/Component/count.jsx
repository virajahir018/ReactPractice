import React, { useEffect, useState } from "react";
import axios from "axios";

function Counter() {
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://api.escuelajs.co/api/v1/categories"
            );

            setShowData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const updateCategory = async () => {
        try {
            await axios.put(
                "https://api.escuelajs.co/api/v1/categories/1",
                {
                    name: "E"
                }
            );

            
        } catch (error) {
            console.log(error.response?.data);
        }
    };

    return (
        <div>
            <button onClick={updateCategory}>
                Update Category 
            </button>

            {showData.map((i) => (
                <div key={i.id}>
                    <h1>{i.name}</h1>
                    <img
                        src={i.image}
                        alt={i.name}
                        width="300"
                    />
                </div>
            ))}
        </div>
    );
}

export default Counter;