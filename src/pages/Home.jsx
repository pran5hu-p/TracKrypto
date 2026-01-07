import {useEffect, useState} from "react";
import {fetchCryptos} from "../api/coingecko";
import { CryptoCard } from "../components/cryptocard";

export const Home = () => {
    const [cryptolist, setcryptolist] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [viewMode, setviewMode] = useState("grid");
    const [sortBy, setsortBy] = useState("market_cap_rank");
    const [searchQuery, setsearchQuery] = useState("");
    
    useEffect(() => {
        fetchCryptoData();
    },[])

    useEffect(() => {
        filterandsort();
    }, [sortBy, cryptolist, searchQuery])

    const fetchCryptoData = async () => {
        try{
            const data = await fetchCryptos();
            setcryptolist(data);
            setfilteredList(data);
        }
        catch(error){
            console.error("Error fetching crypto data:", error);
        }finally{
            setisLoading(false);
        }
    }

    const filterandsort = () => {
        let filtered = cryptolist.filter((crypto) =>
            crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        );
        filtered.sort((a,b) => {
            switch (sortBy){
                case "name":
                    return a.name.localeCompare(b.name);
                case "price":
                    return a.current_price - b.current_price;
                case "price_desc":
                    return b.current_price - a.current_price;
                case "change":
                    return b.price_change_percentage_24h - a.price_change_percentage_24h;
                case "market_cap":
                    return b.market_cap - a.market_cap;
                default:
                    return a.market_cap_rank - b.market_cap_rank;
                
            }
        })
        setfilteredList(filtered);
    };

    return (<div className="app">
        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <h1><span className="logo-emoji">🪙</span>TracKrypto</h1>
                    <p>Your real-time dashboard for live crypto prices, charts, and market insights.</p>
                </div>
                <div className="search-section">
                    <input type="text" placeholder="Search cryptos..." className="search-input" onChange={(e) => setsearchQuery(e.target.value)} value={searchQuery}/>
                </div>
            </div>

        </header>
        <div className="controls">
            <div className="filter-group">
                <label> Sort by:</label>
                <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
                    <option value="market_cap_rank">Rank</option>
                    <option value="name">Name</option>
                    <option value="price">Price (Low to High)</option>
                    <option value="price_desc">Price (High to Low)</option>
                    <option value="change">24h Change</option>
                    <option value="market_cap">Market Cap</option>
                </select>
            </div>
            <div className="view-toggle">
                <button className={viewMode==="grid"?"active":""} onClick={()=>setviewMode("grid")}>Grid</button>
                <button className={viewMode==="list"?"active":""} onClick={()=>setviewMode("list")}>List</button>
            </div>
        </div>
        {isLoading ? (<div className="loading">
            <div className="spinner"/>
            <p>Loading crypto data...</p>
        </div>
        ) : (
            <div className={`crypto-container ${viewMode}`}>
                {filteredList.map((crypto, key)=>(
                    <CryptoCard crypto={crypto} key={key}/>
                ))}
            </div>
        )}
    </div>
    )
}