import React from 'react'
import Routes from '../config/router'
import {
    Link
} from 'react-router-dom'

export default class App extends React.Component {
    componentDidMount () {
        //  do something here
    }

    render () {
        return (
            <div>
                <ul>
                    <li><Link to='/list' >TopicList</Link></li>
                    <li><Link to='/detail' >TopicDetail</Link></li>
                </ul>
                <Routes />
            </div>

        )
    }
}
