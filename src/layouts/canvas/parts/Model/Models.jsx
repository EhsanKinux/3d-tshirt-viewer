// import axios from 'axios';
import React from 'react'
// import { BASE_URL } from '../../../../config/constans';
import Shirt from '../../../../components/shirt/Shirt';

const Models = () => {

  // const [selectedModel, setSelectedModel] = useState(null);

  // useEffect(() => {
  //   fetchModels('647c917272b5442e95666074');
  // }, []);


  // const fetchModels = async (id) => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/pod/product/${id}`);
  //     setSelectedModel(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };


  return (
    <>

        <Shirt
          // modelURL={selectedModel.graphic_url}
        />

    </>
  )
}

export default Models