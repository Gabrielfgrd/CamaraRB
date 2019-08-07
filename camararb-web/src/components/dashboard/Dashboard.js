import React, { Component } from 'react';
import Notifications from './Notifications'
import ProblemsList from '../problems/ProblemsList'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard.container">
                <div className="row">
                    <div className="col s12 m6">
                          <ProblemsList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard