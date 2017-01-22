import React, { Component } from 'react';
import { actions } from './Actions';
import { connect } from 'react-redux';
import './bulma.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                                <a className="button is-dark is-large" onClick={() => this.props.sayHello()}>
                                    Say Hello To React
                                </a>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="content column is-half is-offset-one-quarter">
                        { this.props.sayHelloFlag ? <h1>Hello React !!!!!!</h1> : '' }
                    </div>
                </div>
            </div>
        );
     }
}

const mapStateToProps = (state) => ({
        sayHelloFlag: state.get('sayHello')
});

const AppComponent = connect(
    mapStateToProps,
    actions
)(App);

export default AppComponent;
