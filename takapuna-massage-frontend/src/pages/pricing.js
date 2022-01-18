import React, { Component } from 'react';
import './price.css'

export class pricing extends Component {
    render() {
        return ( <
            div >
            <
            PriceCard service = 'Upper and Lower Body'
            image = 'https://lh5.googleusercontent.com/WczeYaBDBshhUWwYqDjC7AkAVO_vWhanxsNWF7S2xorWsT67jk3Y-yjxbyaW_Fq146xquS1BTv2bBbtPxZA3f8nYNMXcKTrwKiyJT2YMrmEkYyqTwsqYF_sDoN-MaXWDAA=w1280'
            body = 'Neck, Shoulders and Back: Back and Leg 30 min sessions for $50 / 45 min sessions for $70 / 60 min sessions for $85 ' / >

            <
            PriceCard service = 'Whole Body'
            image = 'https://lh4.googleusercontent.com/i6Z20_FPY1w3_JdXrrPJb692HeSh0b9ayN_Z4Kpag3iP_l_CPa6DIejwN_oisMGyeNNT5I7_L_uohzfaWyzCc9KFcFWwz0jI6bncDRTzqOF39TDtfyAa1dx2nD3-NpvwkA=w1280'
            body = '45 min sessions  for  $70 / 60 min sessions for $85, 90 min sessions for $125 /120 min sessions for $160' /
            >

            <
            PriceCard service = 'Reflexology Foot Massage'
            image = 'https://lh3.googleusercontent.com/RTOO9Rt5idYqqS2bYZmBC7equEhOidDDc5PWb8W0AA2V5Umtqq2K0d1pcwHxu9t-ZUBubDG9fv4q0oGtirOclI0ChMBqY5WPrhuVnCqCdkWFR_g2DR2L5EjZdzTW9gWQ3g=w1280'
            body = '30 min sessions for $50 / 45 min sessions for $75 / 60 min sessions for $90' / >
            <
            /div>
        )
    }
}
export default pricing


function PriceCard({ service, image, body }) {
    return ( <
        div className = 'service-position' >
        <
        div className = "image-position" >
        <
        img src = { image }
        alt = '' / >
        <
        /div>     <
        div className = "service-content" >
        <
        div className = "service-name" >
        <
        h3 > { service } < /h3>       < /
        div > <
        div className = "service-text" >
        <
        p > { body } < /p>   < /
        div > <
        div className = "btn" >
        <
        button >
        <
        a > View more <
        /a>    < /
        button > <
        /div>   < /
        div > <
        /div>
    )
}