/**
 * Created by cole on 2017-04-03.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Growl.css';

class Growl extends Component {

  render() {
    return (
      <div className="growl-container">
        {
          this.props.notifications.map((growl, index) => {
            return (
              <div className={`growl ${growl.type}`} key={index}>
                {growl.message}
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    notifications: store.growl.notifications
  }
}


function mapDispatchToProps(dispatch) {
  return {
    close: index => {

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Growl);