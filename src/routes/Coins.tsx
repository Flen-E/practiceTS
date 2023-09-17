import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const CoinList = styled.ul``;

const Coin = styled.li``;

const Title = styled.h1`
    color : ${(props) => props.theme.accentColor};
`;

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
            const response = await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
            setCoins(response.slice(0,50));
            console.log(setCoins);
        })();
    }, []);
    
    return (
        <>
            <Title>코인</Title>
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