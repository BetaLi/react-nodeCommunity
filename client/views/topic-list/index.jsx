import React from 'react'
import { observer, inject } from 'mobx-react'
import { PropTypes } from 'prop-types'
import { AppState } from '../../store/app-state'
import { Helmet } from 'react-helmet'

@inject('appState') @observer
export default class TopicList extends React.Component {
    constructor () {
        super();
        this.changeName = this.changeName.bind(this);
    }

    componentDidMount () {
        // do something here
    }

    bootstrap () {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.props.appState.count = 3
          resolve(true)
        })
      })
  }

    changeName (event) {
        this.props.appState.changeName(event.target.value);
    }

    render () {
        return (
            <div>
              <Helmet>
                <title>This is topic-list title</title>
                <meta name='description' content='this is a description' />
              </Helmet>
                <input type="text" onChange={this.changeName} />
                <span>{this.props.appState.msg}</span>
            </div>
        )
    }
}

TopicList.propTypes = {
    appState: PropTypes.instanceOf(AppState)
}
