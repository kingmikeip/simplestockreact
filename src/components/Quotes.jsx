import React from 'react';

export default function Quotes(props) {
    let stockColor = "black";

    let lastTrade = null;
    if (props.quotes.results) {
        lastTrade = props.quotes.results[0].tradeTimestamp.slice(0, 10) + ' ' + props.quotes.results[0].tradeTimestamp.slice(11, 19) + ' EST';
    } else {
        lastTrade = "N/A";
    }

    if (props.quotes.results && props.quotes.results[0].percentChange>0){
        stockColor = 'green';
    } else if (props.quotes.results && props.quotes.results[0].percentChange<0){
        stockColor = 'red';
    } 


    if (props.quotes.results) {

        return (
            <div className="quotes">

                <h2>
                    {props.quotes.results[0].name}
                    <span className="symbolsize">
                        {" "}({props.quotes.results[0].symbol})
                </span>
                </h2>

                <h3>{`Last Trade ${lastTrade}`}</h3>

                <div>

                    <b>
                        <span id="currentprice">{props.quotes.results[0].lastPrice}{' '}

                            <span className={`${stockColor}`}>
                                {(Math.floor(props.quotes.results[0].netChange * 100) / 100)} ({props.quotes.results[0].percentChange}%)
                        </span>
                        </span>
                    </b>

                    <p>
                        Day's Range:
                    <span className="pricedata">{props.quotes.results[0].low} - {props.quotes.results[0].high}
                        </span>
                    </p>

                    <p>
                        Open:
                    <span className="pricedata">
                            {props.quotes.results[0].open}
                        </span>
                    </p>

                    <p>
                        Previous Close:
                    <span className="pricedata">
                            {props.quotes.results[0].previousClose}
                        </span>
                    </p>

                    <p>
                        52 Week Range:
                    <span className="pricedata">
                            {props.quotes.results[0].fiftyTwoWkLow} - {props.quotes.results[0].fiftyTwoWkHigh}
                        </span>
                    </p>

                    <p>
                        Volume:
                    <span className="pricedata">
                            {props.quotes.results[0].volume}
                        </span>
                    </p>

                    <p>
                        20-Day Avg. Volume:
                    <span className="pricedata">
                            {(props.quotes.results[0].twentyDayAvgVol == null ? 'N/A' : props.quotes.results[0].twentyDayAvgVol)}
                        </span>
                    </p>

                    <p>
                        Ex-Dividend Date:
                    <span className="pricedata">
                            {(props.quotes.results[0].exDividendDate == null ? 'N/A' : props.quotes.results[0].exDividendDate)}
                        </span>
                    </p>

                    <p>
                        Dividend & Yield:
                    <span className="pricedata">
                            {(props.quotes.results[0].exDividendDate == null ? 'N/A' : props.quotes.results[0].dividendYieldAnnual + ' (' + props.quotes.results[0].dividendRateAnnual + '%)')}
                        </span>

                    </p>

                    <h4>Prices delayed 15 minutes</h4>
                </div>

            </div>
        )
    } else {
        return (
            <div></div>
        )
    }


}