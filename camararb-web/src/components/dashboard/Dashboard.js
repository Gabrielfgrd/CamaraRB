import React, { Component } from 'react';
import Notifications from './Notifications'
import ProblemsList from '../problems/ProblemsList'
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { problems} = this.props;

        return (
            <div className="dashboard.container">
                <div className="row">
                    <div className="col s12 m6">
                          <ProblemsList problems={problems} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        problems: state.problem.problems
    }
}

export default connect(mapStateToProps) (Dashboard)