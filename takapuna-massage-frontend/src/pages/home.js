import React, { Component } from 'react'

import background from '../images/background1.png'
import artic from '../images/artic.jpg'


export class home extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',resizeMode: 'contain'}}>
                <div className='head-text'>
                    <div className='head-image'>
                        <img src={artic} alt="Stones" width="1252px" height="834px" />
                    </div>
                    <div className='text-on-image'>
                        <h1>Takapuna Therapeutic Massage is a Professional Traditional Massage shop in Takapuna North Shore. 
                            We also sell massage products such as patches, medical ointment and massagers.
                            Our therapeutic massages include traditional Taiwanese and Chinese style acupressure medicinal techniques. 
                            Our masseurs have at least 5 to 20 years of massage experience. 
                            The environment in our store is comfortable and relaxing and our massage therapists are professional and friendly. 
                            We provide soft music during treatments with complimentary refreshing health tea after each session. 
                            Treat yourself to a massage -let yourself go, free your mind and calm your body and soul. </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default home
