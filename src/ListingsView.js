import React from 'react';
import Header from './Header';
import '../src/sass/_reset.scss';
//import '../src/sass/main.scss';
import './sass/main.scss';
import Filter from  './Filter';
import Listings from './Listings';
import './sass/Filter.scss';
import listingsData from './data/StaticData';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch 
} from 'react-router-dom';


class ListingsView extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elavators: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: '',
      extras: []
    }
  }

  componentWillMount(){

    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }
 

  change = (event) => {
    
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [ name ]: value
    }, () => {
      //console.log(this.state)
      this.filteredData()
    })
  }

  changeView = (viewName) => {
    this.setState({
      view: viewName
    })
  }

  filteredData = () => {
    let newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= 
      this.state.max_price && item.floorSpace >= 
      this.state.min_floor_space && item.floorSpace <= 
      this.state.max_floor_space && item.rooms >= this.state.bedrooms
    }) 

    if(this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if(this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    } 

    if(this.state.sortby == 'price-dsc') {
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
    } 

    if(this.state.sortby == 'price-asc') {
      newData = newData.sort((a,b) => {
        return b.price - a.price
      })
    }

    
    if(this.state.search != ''){
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase()
        let searchText = this.state.search.toLowerCase()
        let n = city.match(searchText)

        if(n != null) {
          return true
        }
      })
    }

    if (this.state.elavators !== false) {
      newData = newData.filter((item) => {
        return item.extras.includes('elavator') === true ? item : null
      })
    }

    if (this.state.finished_basement !== false) {
      newData = newData.filter((item) => {
        return item.extras.includes('Finished Basement') === true ? item : null
      })
    }

    if (this.state.gym !== false) {
      newData = newData.filter((item) => {
        return item.extras.includes('gym') === true ? item : null
      })
    }

    if (this.state.swimming_pool !== false) {
      newData = newData.filter((item) => {
        return item.extras.includes('Swimming Pool') === true ? item : null
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms = () => {
    // city
    let cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    cities = cities.sort()



    // homeType
    let homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    homeTypes = homeTypes.sort()

    // bedrooms
    let bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms) 
    bedrooms = [...bedrooms]

    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    }, () => {
      //console.log(this.state)
    })

  }

  render() {
  return (
      <div className="App">
        <Header /> 
        <section id="content-area">
        <Filter finished_basement={this.state.finished_basement} gym={this.state.gym} swimming_pool={this.state.swimming_pool} elavators={this.state.elavators} change={this.change} globalState={this.state} populateAction={this.populateForms}/>
          <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
        </section>
      </div>
  );
  }
}

export default ListingsView;
