import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Search from './Search';
import Quotes from './Quotes';
import History from './History'
import News from './News'

const quoteURL = "https://marketdata.websol.barchart.com/getQuote.json?";
const quoteKey = "2c8d24b3a535f2162eeafb81cc8d44fb";
const quoteKey2 = "bd2e9bad968e8f173210cc941f94b2a5";
const newsURL = "https://newsapi.org/v2/everything?q=";
const newsKey = "3c6d1cd2d9ce40368e9b75acb8a6f9cf";
let quoteFields = "fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate%2CpreviousClose%2CtwentyDayAvgVol%2CexDividendDate%2CdividendRateAnnual%2CdividendYieldAnnual%2C";


export default function Home() {

    useEffect({





    }, [])


    return (
        <div>
            <main>
                <div className="maincontainer">
                    <Search />
                    <div>
                        <div className="quotecontainer">
                            <Quotes />
                        </div>
                        <div className="sidecontainer">
                            <History />
                            <News />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}


// the brains of the app