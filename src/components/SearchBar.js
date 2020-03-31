import React, {useState, useEffect} from 'react';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('')
    let timer = 2
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    useEffect( () => {
        console.log(typeof timer)
        if (timer !== 2){
            timer.clearTimeout()
            console.log('clearing timeout')
        }
        timer = setTimeout( () => {
            console.log(searchText)
        }, 1500)
    }, [searchText] )

    return (
        <div>
            <input type='text'
            onChange={handleChange}
            placeholder="Search" 
            value={searchText}
            />
        </div>
    );
};

export default SearchBar;