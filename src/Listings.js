import React, { Component } from 'react';
import '../src/sass/Listings.scss';
import realtor_1 from './images/realtor-1.jpeg';
import realtor_2 from './images/realtor-2.jpeg';
import realtor_3 from './images/realtor-3.jpeg';
import ListingModal from './ListingModal';
import Pagination from './Pagination';

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
          price: 0,
          currentPage: 1,
          listingPerPage: 13,
        }
        this.handleShowModal = this.handleShowModal.bind(this)
    }

    handleCloseModal = () => 
      this.setState({
        showModal: false
      })

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

    paginate = (pageNumber) => {
      this.setState({
        currentPage: pageNumber
      })
    } 

    render() {
      const { currentPage, listingPerPage } = this.state;
      const totalListings = this.props.listingsData.length;
      const indexOfLastProduct = currentPage * listingPerPage;
      const indexOfFirstProduct = indexOfLastProduct - listingPerPage;
      const currentListings = this.props.listingsData.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      ); 
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
                      <div className="view" style={{ display: 'flex', flexDirection: 'row' }}>
                        <i className="fas  fa-th-list" style={{ height: '26px' }}></i>
                        <i className="fas  fa-th-list" style={{ height: '26px' }}></i>
                      </div>
                  </div>
               </section>

                <section className="listings-results">
                  {currentListings.length ? 
                    currentListings.map((listing, index) => {
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
                  }) : (<p className="no-results">No Results Found 🙁 </p>)}
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
                {currentListings.length ?
                  <Pagination
                    paginate={this.paginate}
                    listingPerPage={listingPerPage}
                    totalListings={totalListings}
                    currentPage={currentPage}
                  /> 
                : ''}
            </div>
        );
    }
}

export default Listings;
