import axios from "axios";
import { useEffect, useState } from "react";

function Axios() {

    const [showData, setShowData] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/categories/1",{
                name : "c"
            })
            setShowData(response.data)
            console.log(response.data)
        } catch (error) {
            console.log("Error")
        }
    }


    return (
        <div>
          <h1>{showData.name}</h1>
        </div>
    )
}


export default Axios;