import React from 'react'

function pricecard(props) {
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
        p className = "service__details" > { props.details } < /p> <
        button className = "card__button" > View Service < /button> <
        /div> <
        /div>
    )
}

export default pricecard