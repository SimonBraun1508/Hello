import React from 'react'
import './Header.css'
import logoplaceholder from './img/Logoplaceholder.png'

export default function Header() {
    return (
        <div className="header">
            <div class="row myrow">
                <div class='col mycol'>12334</div>
                <div class='col mycol'>232241</div>
                <div class='col mycol'>1</div>
                <div class='col mycol'>1</div>
            </div>
            <div class="row myrow">
                <div class='col mycol'><img className="logo" src={logoplaceholder} alt="Logo"></img> </div>
                <div class='col mycol2'>meaningful text</div>
                {/* <div class='col mycol'>1</div> */}
                {/* <div class='col mycol'>1</div> */}
            </div>
        </div>
    )
}
