import React from 'react';

export default function History(props) {
    return (
        <div>
            <span id="ticker">Ticker </span>
            <span id="current">Current Price </span> 
            <span id="change">Change </span> 
            <span id="pct">% </span>  
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
                    if (index > 4) {
                        return null;
                    }
                    return (
                        <div className="historynumbers" key={index}>
                        <div className="historylastprice">
                            {quote.lastPrice}
                        </div>
                        <div className="historynetchange">
                            {quote.netChange}
                        </div>
                        <div className="historypercentchange">
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