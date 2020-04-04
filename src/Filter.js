import React, { Component } from 'react';
import '/Users/test/real-state-website/src/sass/Filter.scss';

class Filter extends Component {

    componentWillMount(){
        this.props.populateAction()
    }
 
    cities = () => {
        if(this.props.globalState.populateFormsData.cities != undefined) {
          let { cities } = this.props.globalState.populateFormsData
    
         
          return cities.map((item) => {
            return(
              <option id="option" key={item} value={item}>{item}</option>
            )
          })
        }
      }

      homeTypes = () => {
        if(this.props.globalState.populateFormsData.homeTypes != undefined) {
          let { homeTypes } = this.props.globalState.populateFormsData
          
          return homeTypes.map((item) => {
            return(
              <option id="option"  key={item} value={item}>{item}</option>
            )
          })
        }
      }

      bedrooms = () => {
        if(this.props.globalState.populateFormsData.bedrooms != undefined) {
          let { bedrooms } = this.props.globalState.populateFormsData
    
          
          return bedrooms.map((item) => {
            return(
              <option id="option"  key={item} value={item}>{item}+ BR</option>
            )
          })
        }
      }
      
    render() {
        const { globalState, finished_basement, gym, swimming_pool } = this.props;
        return (
            <div id="filter">
                <div className="inside">
                <h4>Filter</h4>
                <label htmlFor="city">City</label>
                <select name="city" className="neighborhood filters" onChange={this.props.change} >
                    <option id="option"  className="" value="All">All</option>
                    {this.cities()}
                </select>
                <label htmlFor="homeType">Home Type</label>
                <select name="homeType" className="homeType  filters"
                     onChange={this.props.change} 
                >
                    <option id="option"  value="All" className="">All Homes</option>
                   {this.homeTypes()}
                </select>
                <label htmlFor="bedrooms">Bedrooms</label>
                <select name="bedrooms" className="bedrooms filters"
                     onChange={this.props.change} 
                >
                    {this.bedrooms()}
                </select>
                <div className="filters price" >
                    <span className="title">Price</span>
                    <input type="text" name='min_price' className="min-price"  onKeyDown={this.props.change}  onChange={this.props.change} value={globalState.min_price} />
                    <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={globalState.max_price} />
                </div>
                <div className="filters floor-space">
                    <span className="title">Floor Space</span>
                    <input type="text" value={globalState.min_floor_space} name="min_floor_space" className="min-floor-space"  onChange={this.props.change}  />
                    <input type="text" value={globalState.max_floor_space} name="max_floor_space" className="max-floor-space"  onChange={this.props.change}  />
                </div> 
                <div className="filters extras">
                    <span className="title">
                        Extras 
                    </span>
                    <label htmlFor="extras">
                        <span>Elevators</span>
                    <input checked={this.props.elavators} name="elavators" type="checkbox" value="elavators"  onChange={this.props.change}  />
                    </label>
                    <label htmlFor="extras">
                        <span>Swimming Pool</span>
                        <input checked={swimming_pool} name="swimming_pool" type="checkbox"  value="swimming_pool"  onChange={this.props.change} />
                    </label>
                    <label htmlFor="extras">
                        <span>Finished Basement</span>
                        <input checked={finished_basement} name="finished_basement" type="checkbox"  value="finished_basement"  onChange={this.props.change} />
                    </label>
                    <label htmlFor="extras">
                        <span>Gym</span>
                        <input checked={gym} name="gym" type="checkbox" value="gym"  onChange={this.props.change}  />
                    </label>
                </div>
                </div>
            </div>
        );
    }
}

export default Filter;