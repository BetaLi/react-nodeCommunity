import React from 'react'
import Routes from '../config/router'
import {
    Link
} from 'react-router-dom'
import Button from 'material-ui/Button'

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
              <Button variant="raised" color="primary">primary</Button>
                <Routes />
            </div>

        )
    }
}
