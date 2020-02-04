import React from 'react';

export default function History(props) {
    return (
        <div>
            <span id="ticker">Ticker</span>
            <span id="current">Current Price</span> 
            <span id="change">Change</span> 
            <span id="pct">%</span>  
            <div className="history">
            <div className="historynames">
                {props.history && props.history.map((historyitem, index) => {
                    if (index > 4) {
                        return null;
                    }
                    return (
                        <div key={index} name={historyitem} onClick={props.historyClick} className="historynameitem">
                            {historyitem}
                        </div>
                    )
                })
                }
            </div>

            <div className="historyvalues">
                {props.historyQuotes && props.historyQuotes.map((quote, index) => {
                    let stockColor;
                    if (index > 4) {
                        return null;
                    }
                    if (quote && quote.percentChange>0){
                        stockColor = 'green';
                    } else if (quote && quote.percentChange<0){
                        stockColor = 'red';
                    } 
                    return (
                        <div className="historynumbers" key={index}>
                        <div className="historylastprice">
                            {quote.lastPrice}
                        </div>
                        <div className={`historynetchange ${stockColor}`}>
                            {(Math.floor(quote.netChange * 100) / 100)}
                        </div>
                        <div className={`historypercentchange ${stockColor}` }>
                            {quote.percentChange}
                        </div>
                        </div>
                    )


                })}

            </div>
            </div>
        </div>
    )
}