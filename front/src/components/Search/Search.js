import { Context } from '../../index';
import { useContext } from 'react';


const Search = () => {

    const {appTheme} = useContext(Context)
    return(
        <div className="md-form mt-0" >
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{backgroundColor:appTheme.mainColor, color:appTheme.secondaryColor}}/>
        </div>
    )
}

export default Search