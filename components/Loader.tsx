import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {State} from '../utils/Types'
import {colors} from '../utils/Constants'

type Props = {
  loading: boolean
}

const Loader = ({loading}: Props) => {

  return ( 
    <View style={styles.loader}>  
        <ActivityIndicator animating={loading} size="large" color={colors.primary}/>
    </View>
  )
}


const mapStateToProps = (state: {App: State }) => ({
  loading: state.App.loading
})

const styles= StyleSheet.create({
  loader: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgColor,

  }
})

export default connect(mapStateToProps)(Loader)