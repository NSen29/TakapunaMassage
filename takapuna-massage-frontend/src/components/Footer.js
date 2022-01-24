import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div class="row">
            <div class="column"></div>
            <div class="column"></div>
                <div className='column left'>
                    <h2>Takapuna Therapeutic Massage</h2>
                    <p>106 Hurstmere Road, Takapuna, Auckland</p>
                    <p>Phone: 09-4860666</p>
                    </div>
                <div className='column right'>
                    <h2>Opening hours</h2>
                    <p>Monday 10am-7pm</p>
                    <p>Tuesday 10am-7pm</p>
                    <p>Wednesday 10am-7pm</p>
                    <p>Thursday 10am-7pm</p>
                    <p>Friday 10am-7pm</p>
                    <p>Saturday 10am-7pm</p>
                    <p>Sunday 10am-7pm</p>
                </div>
            </div>
        )
    }
}

export default Footer
