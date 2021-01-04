import React from 'react';
import { StyleSheet, Text, View,FlatList,Alert,SafeAreaView } from 'react-native';
import { ListItem } from "react-native-elements";
import axios from "axios";


export default class MainScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          listData: [],
         url: "http://127.0.0.1:5000/"
        //url: "http://1a21e6ddc6c9.ngrok.io"
      
        };
      }

      componentDidMount() {
        this.getStars();
        console.log(this.state.listData)
      }

      getStars =async () => {
        const { url } = this.state;
        console.log("URL " + url)
        axios
          .get(url,{headers:{'Access-Control-Allow-Origin': "*"} // header is also there still cors policy issue
          
          
        },)
          .then(response => {
            console.log("Response " + response)
            return this.setState({
              listData: response.data.data
            });
          })
          .catch(error => {
            Alert.alert(error.message);
          });
      };

      renderItem = ({ item, index }) => (
        <ListItem
          key={index}
          title={`Star : ${item.name}`}
          subtitle={`Distance from earth : ${item.distance}`}
          titleStyle={styles.title}
          containerStyle={styles.listContainer}
          bottomDivider
          chevron
          onPress={() =>
            this.props.navigation.navigate("Details", { star_name: item.name })
          }
        />
      );
    
      keyExtractor = (item, index) => index.toString();

      render() {
        const { listData } = this.state;
    
        if (listData.length === 0)
         {
          return (
            <View style={styles.emptyContainer}>
              <Text>Loading</Text>
            </View>
          );
        }
    
        return (
          <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.upperContainer}>
              <Text style={styles.headerText}>STARS OF UNIVERSE</Text>
            </View>
            <View style={styles.lowerContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.listData}
                renderItem={this.renderItem}
              />
            </View>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#FCE4EC"
      },
      upperContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
      },
      headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1A237E"
      },
      lowerContainer: {
        flex: 0.9
      },
      emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      emptyContainerText: {
        fontSize: 20
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1A237E"
      },
      listContainer: {
        backgroundColor: "#FCE4EC"
      }
    });
    
