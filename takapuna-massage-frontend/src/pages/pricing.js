import React, { Component } from 'react'

export class pricing extends Component {
    render() {
        return ( <
            div >
            <
            h1 > pricing page < /h1>  <
            PriceCard

            img = "https://lh4.googleusercontent.com/nluDrcI4E_PuXScKKYAe4-O9A0b0ZJ_r4gEvB6WKwFvxwlxdQOwgyWUvqBYHq9yq_-5pP9TbukzR5hmVvTtpjhmHHSjXCNplNJGgyaKffGFAew2_cLxdn23t-CjDy0Bxgw=w1280"
            name = "Head, Neck and Shoulders"
            description = "10mins          $20  20mins           $30  30mins           $50" /
            >
            <
            PriceCard

            img = "https://lh5.googleusercontent.com/WczeYaBDBshhUWwYqDjC7AkAVO_vWhanxsNWF7S2xorWsT67jk3Y-yjxbyaW_Fq146xquS1BTv2bBbtPxZA3f8nYNMXcKTrwKiyJT2YMrmEkYyqTwsqYF_sDoN-MaXWDAA=w1280"
            name = "Upper/Lower Body"
            description = "30mins          $50  45mins           $70  60mins           $85" /
            >
            <
            PriceCard

            img = "https://lh4.googleusercontent.com/i6Z20_FPY1w3_JdXrrPJb692HeSh0b9ayN_Z4Kpag3iP_l_CPa6DIejwN_oisMGyeNNT5I7_L_uohzfaWyzCc9KFcFWwz0jI6bncDRTzqOF39TDtfyAa1dx2nD3-NpvwkA=w1280"
            name = "Head, Neck and Shoulders"
            description = "10mins          $20  20mins           $30  30mins           $50" /
            >
            <
            /div>

        )
    }
}

export default pricing

function PriceCard(props) {
    return ( <
        div className = "card" >
        <
        div className = "card__element" >
        <
        img src = { props.img }
        /> <
        h2 className = "service__name" > { props.name }

        <
        /h2> <
        p className = "service__details" > { props.description } < /p> <
        button className = "card__button" > View Service < /button> < /
        div > <
        /div>
    )
}