import React from 'react';

export default function Search(props) {
    return (
        <div className="searchbar">
            <form>
                <input type="text" name="ticker" className="ticker" />
                <input type="submit" name="ticker" value="Submit" className="stocklookup" /><br />
            </form>
        </div>
    )
}