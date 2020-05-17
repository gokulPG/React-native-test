import * as types from '../../utils/Constants'
import {http, API_KEY} from '../../config/Http'
import {Dispatch} from 'redux'
import {Alert} from 'react-native'


export const getAstroid = (astroidId: string, navigate: Function) => (dispatch: Dispatch) => {
    dispatch({type: types.SET_LOADING, payload: true})
    http.get(`/${astroidId}?api_key=${API_KEY}`)
          .then(res => {
              dispatch({
                type: types.SET_ASTROIDS,
                payload: res.data
              })
              navigate('AstroidDetails')
          })
          .catch(err => {
            console.log(err)
            Alert.alert(err.response.message)
          })
}


export const getRandomAstroid = (navigate : Function) => (dispatch: Dispatch<any>) => {
      dispatch({type: types.SET_LOADING, payload: true})
      http.get(`/browse?api_key=${API_KEY}`)
          .then(res => {
              const randomId = res.data.near_earth_objects[Math.floor(Math.random() * res.data.near_earth_objects.length)].id
              dispatch(getAstroid(randomId, navigate))
          })
          .catch(err => {
            console.log(err)
            Alert.alert(err.response.message)
          })
} 