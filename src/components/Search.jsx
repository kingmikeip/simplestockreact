import React from 'react';

export default function Search(props) {
    return (
        <div className="searchbar">
            <form>
                <input type="text" name="ticker" className="tickersearch" onChange={props.updateInput} />
                <input type="submit" name="ticker" value="Submit" className="stocklookup" onClick={props.getInput}/><br />
            </form>
        </div>
    )
}