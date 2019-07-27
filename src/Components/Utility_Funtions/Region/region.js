import React from 'react';
import './region.css'

const region=(props)=>{
    return(
        <select onClick={props.click} onMouseLeave={props.click} className="region">
                    <option value="in">India</option>
                    <option value="cn">China</option>
                    <option value="us">U.S</option>
                    <option value="ru">Russia</option>
                    <option value="us">U.S</option>
                    <option value="gb">U.K</option>
                    <option value="au">Australia</option>
                    <option value="ar">Argentina</option>
                    <option value="be">Belgium</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="cz">Czech Republic</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="hk">Hong Kong</option>
                    <option value="id">Indonesia</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="my">Malaysia</option>
                    <option value="nz">New Zeland</option>
                    <option value="no">Norway</option>
                    <option value="ph">philippines</option>
                    <option value="pt">Portugal</option>
                    <option value="sa">Saudi Arabia</option>
                    <option value="sg">Singapore</option>
                    <option value="za">South Africa</option>
                    <option value="kr">South Korea</option>
                    <option value="se">Sweden</option>
                    <option value="ch">Switzerland</option>
                    <option value="tw">Taiwan</option>
                    <option value="th">Thailand</option>
                    <option value="ae">UAE</option>
                    </select>
    )
}
export default region