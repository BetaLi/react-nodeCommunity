import React from 'react'
import axios from 'axios'

export default class TestApi extends React.Component {
    constructor () {
        super()
        this.testLogin = this.testLogin().bind(this);
    }
    testLogin () {
        //
        axios()
    }
    render () {
        return (
            <div>
                <Button onClick = { this.testLogin() }></Button>
            </div>
        )
    }
}
