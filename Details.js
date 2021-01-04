import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      
      url: `http://localhost:5000/star?name=${this.props.navigation.getParam("star_name")}`
    };
  }

  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then(response => {
        this.setDetails(response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  setDetails = planetDetails => {
    
    this.setState({
      details: planetDetails
      
    });
   
  };

  render() {
    const { details, imagePath } = this.state;
   
    var planet_data = details.data
    if (planet_data) {
      return (
        <View style={styles.container}>
          <Card
            title={planet_data.name}
            
          >
            <View>
              <Text
                style={styles.cardItem}
              >{`Distance from Earth : ${planet_data.distance}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Solar Radius  : ${planet_data.solar_radius}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${planet_data.star_gravity}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Solar Mass : ${planet_data.solar_mass}`}</Text>
              
              <Text
                style={styles.cardItem}
              >{`Star Mass : ${planet_data.mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Radius : ${planet_data.radius}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Apparent Magnitude : ${planet_data.apparent_magnitude}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Luminosity : ${planet_data.luminosity}`}</Text>
            </View>
            
          </Card>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FCE4EC'
  },
  cardItem: {
    marginBottom: 10,
    color:'#1A237E'
  }
});
