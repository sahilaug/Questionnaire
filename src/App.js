import React, { Component } from 'react';
import { actions } from './Actions';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import Chart from './Chart';

class App extends Component {

    constructor() {
        super();
        this.calculateResult = this.calculateResult.bind(this);
    }

    calculateResult(values) {
        this.props.calculateResult({ selectedValues: values });
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <QuestionList
                            className="column is-half p30"
                            questions={this.props.questions}
                            onSubmit={this.calculateResult}
                            resetChart={this.props.resetChart}
                        />
                        <Chart className="column is-half" data={this.props.data}  />
                    </div>
                </div>
            </div>
        );
     }
}

const mapStateToProps = (state) => {
    return {
        questions: state.appReducer.get('questions'),
        data: state.appReducer.get('data')
    }
};

const AppComponent = connect(
    mapStateToProps,
    actions
)(App);

export default AppComponent;
