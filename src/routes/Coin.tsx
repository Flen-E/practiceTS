import { useParams } from "react-router-dom";


interface IParams{
    coinId:string;
}
function Coin() {

    const { coinId } = useParams<IParams>();

    return(
        <h2>{coinId} Coin</h2>
    )
}
export default Coin;