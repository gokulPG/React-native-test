import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Astroid from '../screens/Astroid'
import { shallow } from 'enzyme'

const mockStore = configureMockStore()
const store = mockStore({})

const createTestProps = () => ({
    navigation: {
        navigate: jest.fn()
    }
})

describe('Users screen', () => {
    describe('rendering', () => {

        const props = createTestProps()
        const wrapper = shallow(
            <Provider store={store}>
                <Astroid {...props} />
            </Provider>
        )

        it('should render a view', () => {
            expect(wrapper.find('.astroid-search-wrapper')).toHaveLength(0)
        })
    })
})