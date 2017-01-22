import { fromJS } from 'immutable';
import { constants } from './Actions';

const initialState = fromJS({
    sayHello: false
});

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case constants.SAY_HELLO:
        {
            return state.set('sayHello', !state.get('sayHello'));
        }
        default:
        {
            return state;
        }
    }
}