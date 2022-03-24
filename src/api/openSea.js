import axios from 'axios'

const openSea = () => {

    const [data, setData] = useState(null);

    const fetchData = async () => {
      const result = await axios.get('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20')
      // setData(result.data)
    }

}

export default openSea;
