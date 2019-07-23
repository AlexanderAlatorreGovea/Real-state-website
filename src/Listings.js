import React, { Component } from 'react';
import '../src/sass/Listings.scss';
import realtor_1 from './images/realtor-1.jpeg';
import realtor_2 from './images/realtor-2.jpeg';
import realtor_3 from './images/realtor-3.jpeg';
import ListingModal from './ListingModal';
 
class Listings extends Component {
    constructor () {
        super() 
        this.state = {
          showModal: false,
          selectedListing: null,
          list: [],
          modalId: 0,
          listingImage: '',
          image: '',
          address: '',
          city: '',
          rooms: '',
          floorSpace: '',
          price: 0
        }
        this.handleShowModal = this.handleShowModal.bind(this)
    }

    handleCloseModal = () => this.setState({showModal: false})

    handleShowModal = (listing) => {
      this.setState({
        showModal: true,
        modalId: listing.index,
        image: listing.image,
        address: listing.address,
        city: listing.city,
        rooms: listing.rooms,
        floorSpace: listing.floorSpace,
        price: listing.price
      });
    };    

    render() {
        return (
            <div id="listings">
               <section className="search-area">
                    <input className="search" type="text" name="search"  onChange={this.props.change} />
               </section>

               <section className="sortby-area">
                    <div className="results">{this.props.globalState.filteredData.length} results found</div>
                    <div className="sort-options">
                        <select name="sortby" className="sortby" onChange={this.props.change}>
                            <option value="price-dsc">Lowest Price</option>  
                            <option value="price-asc">Highest Price</option>
                        </select>
                        <div className="view">
                            <i style={{fontSize: '1.5rem'}}className="fas  fa-th-list"></i>
                            <i className="fa fa-th" aria-hidden="true"></i>
                        </div>
                    </div>
               </section>

               <section className="listings-results">
                      {this.props.listingsData.map((listing, index) => {
                        return (
                          <div className="col-md-3" key={index}>
                            <div className="listing">
                              <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                                <span className="address">{listing.address}</span>
                                <div className="details">
                                  <div className="col-md-3">
                                    <div className="user-img"style={{background: `url("${listing.realtor}") no-repeat center center`, backgroundSize: 'cover'}}> </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="user-details">
                                      <span className="user-name" >{`${listing.realtorName}`}</span>
                                      <span className="post-date">05/05/2019</span>
                                    </div>
                                    <div className="listing-details">
                                      <div className="floor-space">
                                        <i className="fa fa-square-o" aria-hidden="true"></i>
                                        <span >{listing.floorSpace} ft&sup2;</span>
                                      </div>
                                      <div className="bedrooms">
                                        <i className="fa fa-bed" aria-hidden="true"></i>
                                        <span >{listing.rooms} bedrooms</span>
                                      </div>
                                    </div>
                                    <div className="view-btn" key={index}
                                      onClick={this.handleShowModal.bind(null, listing)}
                                    >
                                      View Listing
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bottom-info">
                                <span className="price">${listing.price}</span>
                                <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}, {listing.state} </span>
                              </div>
                            </div>
                          </div>
                          )   
                       } 
                       )}
                       
                       {this.state.showModal &&
                          <ListingModal
                          handleShowModal={this.handleShowModal}
                          props={this.state}
                          image={this.state.image} address={this.state.address} 
                          city={this.state.city} rooms={this.state.rooms} floorSpace={this.state.floorSpace}
                          price={this.state.price} data={this.state}
                          onCloseModal={this.handleCloseModal}
                          /> }
               </section>
               <section className="pagination">
                    <ul className="pages">
                        <li>Prev</li>
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>Next</li>
                    </ul>
               </section>
            </div>
        );
    }
}

export default Listings;


/* 
    loopListings () {
        let { listingsData } = this.props

        if(listingsData == undefined || listingsData.length == 0) {
          return "Sorry your filter did not match any listing"
    }
    
        return listingsData.map((listing, i) => {
            return (
            <div className="col-md-3" 
            key={i}>
              <div className="listing">
                <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                  <span className="address">{listing.address}</span>
                  <div className="details">
                    <div className="col-md-3">
                      <div className="user-img"style={{background: `url("${listing.realtor}") no-repeat center center`, backgroundSize: 'cover'}}> </div>
                    </div>
                    <div className="col-md-9">
                      <div className="user-details">
                        <span className="user-name" >{`${listing.realtorName}`}</span>
                        <span className="post-date">05/05/2019</span>
                      </div>
                      <div className="listing-details">
                        <div className="floor-space">
                          <i className="fa fa-square-o" aria-hidden="true"></i>
                          <span >{listing.floorSpace} ft&sup2;</span>
                        </div>
                        {this.state.showModal &&
                      <ListingModal onCloseModal={this.handleCloseModal}
                        image={listing.image} address={listing.address} 
                        city={listing.city} rooms={listing.rooms} floorSpace={listing.floorSpace}
                        price={listing.price} data={listing}
                         key={i}
                      />
                       }
                        <div className="bedrooms">
                          <i className="fa fa-bed" aria-hidden="true"></i>
                          <span >{listing.rooms} bedrooms</span>
                        </div>
                      </div>
    
                      <div className="view-btn"
                      >
                        View Listing
                      </div>
                    </div>
    
    
                  </div>
                </div>
                <div className="bottom-info">
                  <span className="price">${listing.price}</span>
                  <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}, {listing.state} </span>
                </div>
              </div>
            </div>
            ) 
        })
      }  










 loopListings = () => {
        const { listingsData } = this.props;
        if(listingsData ==  undefined || listingsData.lenght == 0 ) {
            return 'Sorry your filter did not match any listing'
        }
        return listingsData.map((listing, i) => {
            return (
                <div className="col-md-3" key={i} >
                    <div className="listing" >
                    <div className="listing-img"
                        style={{
                            background: `url('${listing.image}') no-repeat center center`
                        }}
                    >
                        <span className="address">{listing.address} </span>
                            <div className="details">
                                <div className="col-md-3">
                                    <div className="user-img"></div>
                                    </div>
                                    <div className="col-md-9">
                                    <div className="user-details">
                                        <span className="user-name">Nina Smith</span>
                                        <span className="post-date">05/05/2019</span>
                                    </div>
                                    <div className="listing-details">
                                        <div className="floor-space">
                                            <i className="far  fa-square" aria-hidden="true"></i>
                                            <span>1000 ft&sup2;</span>
                                        </div>
                                        <div className="bedrooms">
                                            <i className="fas  fa-bed"></i>
                                            <span>{listing.rooms}bedrooms</span>
                                        </div>
                                    </div>
                                    <div className="view-btn">
                                        View Listing
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="bottom-info">
                        <span className="price">${listing.price} / month </span>
                        <span className="location"><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state} </span>
                    </div>
                    </div>
            </div>
            )
        })
    }

*/





