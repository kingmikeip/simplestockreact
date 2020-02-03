import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Quotes from './Quotes';
import History from './History'
import News from './News'

const keyNum = 1;
const quoteURL = "https://marketdata.websol.barchart.com/getQuote.json?";
const quoteKey = ["2c8d24b3a535f2162eeafb81cc8d44fb", "bd2e9bad968e8f173210cc941f94b2a5"];
const newsURL = "https://newsapi.org/v2/everything?q=";
const newsKey = "3c6d1cd2d9ce40368e9b75acb8a6f9cf";
let quoteFields = "fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate%2CpreviousClose%2CtwentyDayAvgVol%2CexDividendDate%2CdividendRateAnnual%2CdividendYieldAnnual%2C";


export default function Home(props) {

    const [quotes, setQuotes] = useState([]);
    const [news, setNews] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [history,setHistory] = useState(["GOOG","GE","MSFT","AAPL","AMZN"]);
    const [historyQuotes, setHistoryQuotes] = useState([]);

    async function getQuote(symbol) {
        let response = await axios.get(`${quoteURL}apikey=${quoteKey[keyNum]}&symbols=${symbol}&fields=${quoteFields}`)
        setQuotes(response.data);
        if (!historyIncludes(symbol.toUpperCase())){
            setHistory([symbol.toUpperCase(),...history])
        }

    }

    async function getHistory() {
        let response = await axios.get(`${quoteURL}apikey=${quoteKey[keyNum]}&symbols=${history}&fields=${quoteFields}`)
        setHistoryQuotes(response.data.results);
    }

    async function getNews(newsItem) {
        let fromDate = getDate();
        let response = await axios.get(`${newsURL}${newsItem}${fromDate}${newsKey}`)
        setNews(response.data.articles);
    }

    function getDate() {
        let date; 
        let tempDate = new Date();
        tempDate.setDate(tempDate.getDate() - 7);
        date = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`
        const fromDate = `&from=${date}&sortBy=popularity&language=en&apiKey=`;
        return fromDate;
    }

    function getInput(e){
        e.preventDefault();
        getQuote(searchInput);
        getNews(searchInput);
    }

    function updateInput(e){
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    function historyIncludes(symbol){
        if (history.includes(symbol)){
            return true;
        } 
        return false;
    }

    function historyClick(e){
        e.preventDefault();
        let value = e.target.getAttribute('name');
        getQuote(value);
        getNews(value);
    }

    useEffect(() => {

        const currentQuote = async (symbols) => {
            await getQuote(symbols);
        }

        const currentNews = async (searchTerm) => {
            await getNews(searchTerm);
        }

        const currentHistory = async () => {
            await getHistory(history);
        }

        currentQuote(history[0]);
        currentNews(history[0]);
        currentHistory();

    }, [props]);


    return (
        <div>
            <main>
                <div >
                    <Search getInput={getInput} updateInput={updateInput}/>
                    <div className="maincontainer">
                        <div className="quotecontainer">
                            <Quotes quotes={quotes} />
                        </div>
                        <div className="sidecontainer">
                            <div className="historycontainer">
                                <History history={history} historyQuotes={historyQuotes} historyClick={historyClick}/>
                            </div>
                            <div className="newscontainer">
                                <News news={news} />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}


// the brains of the app