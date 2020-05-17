import React from 'react'
import {View, StyleSheet} from 'react-native'
import {colors} from '../utils/Constants'

type Props = {
  children: React.ReactNode
}

const AstroidCard = ({children} : Props) => {
    return (
      <View style={styles.card}> 
        {children}
      </View>
    )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 20,
    marginHorizontal: 15,
    marginVertical: 30,
    borderRadius: 5,
    elevation: 10,
    shadowColor: "#000",
    shadowRadius: 0.5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 3,
      width: 3
    }
  }
})



export default AstroidCard