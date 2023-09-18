import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const CoinList = styled.ul``;

const Coin = styled.li``;


interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const [coins , setCoins] = useState<ICoin[]>([]);
    useEffect(()=>{
        (async() =>{
            await (await fetch("https://api.coinpaprika.com/v1/coins")).json()
            .then(res => setCoins(res.slice(0,50)))
        })();
    }, []);
    useEffect(()=>{
        (async()=>{
            await axios.get("https://api.coinpaprika.com/v1/coins")
            .then(res=> setCoins(res.data.slice(0,50)));
        })();
    },[])

    return (
        <>
            <CoinList>
                {coins.map((coin) =>(
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinList>
        </>
    )
}
export default Coins;
