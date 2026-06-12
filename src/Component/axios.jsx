import React, { useEffect, useState } from "react";
import axios from "axios";

function Category() {
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
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const addCategory = async () => {
        try {
            await axios.post(
                "https://api.escuelajs.co/api/v1/categories/",
                {
                    name: "BBBBBBBBB",
                    image: "https://i.imgur.com/Qphac99.jpeg"
                }
            );

            fetchData();

        } catch (error) {
            console.log(error);
        }

    };

    const updateCategory = async () => {
        try {
            await axios.put(
                "https://api.escuelajs.co/api/v1/categories/1",
                {
                    name: "B"
                }
            );
            fetchData();

        } catch (error) {
            console.log(error);
        }

    };



    return (
        <div>
            <button onClick={updateCategory}>
                Update Category
            </button>
            <button onClick={addCategory}>
                Add Category
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

export default Category;