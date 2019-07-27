import React from 'react';
import ReactDOM from 'react-dom';
import './sass/ListingModal.scss';
import { Link } from 'react-router-dom';

const modalRoot = document.getElementById('modal-root')

class ListingModal extends React.Component {
  constructor () {
    super() 
    this.state = {
      data: []
    }
}


  el = document.createElement('div')
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }



  render() {
  const { listing, data, onCloseModal, image, address, city, rooms, floorSpace, price } = this.props;
  return ReactDOM.createPortal(
        <div
        style={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: '100',
          height: '100%',
          width: '100%'
        }}
      >
      <div onClick={this.props.onCloseModal} className="svg-container">
            <svg  className="x" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
        </div>
        <div className="home-container">
        <div onClick={onCloseModal} className="svg-container">
              <svg className="x" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
          </div>
              <div className="homes">
                <div class="home" key={data.index} >
                  <img src={image} alt="House 2" class="home__img" />
                  <div class="home__like" >
                      <i class="heart icon"></i>
                  </div>
                  <h5 class="home__name">{data.address}</h5>
                  <div class="home__location">
                      <div>
                          <i class="map marker icon"></i>
                      </div>
                      <p >{data.city}</p>
                  </div>
                  <div class="home__rooms">
                      <div>
                          <i class="user outline icon"></i>
                      </div>
                      <p >{rooms} bedrooms</p>
                  </div>
                  <div class="home__area">
                      <div>
                          <i class="external alternate icon"></i>
                      </div>
                      <p>{data.floorSpace} m<sup>2</sup></p>
                  </div>
                  <div class="home__price">
                      <div>
                          <i class="key icon"></i>
                      </div>
                      <p >${data.price}</p>
                  </div>
                  <Link to={{ pathname: '/SignIn' }} className="btn home__btn"><span className="contact">Contact realtor</span></Link>
                  </div>
              </div>
            </div>
        </div>,
      this.el
    )
  }
}

export default ListingModal;

/* 
import React from 'react';
import ReactDOM from 'react-dom';
import './sass/ListingModal.scss';
import { Link } from 'react-router-dom';

const modalRoot = document.getElementById('modal-root')

class ListingModal extends React.Component {
  constructor () {
    super() 
    this.state = {
      data: []
    }
}


  el = document.createElement('div')
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }



  render() {
  const { listing, data, onCloseModal, image, address, city, rooms, floorSpace, price } = this.props;
  return ReactDOM.createPortal(
        <div
        style={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: '100',
          height: '100%',
          width: '100%'
        }}
      >
      <div onClick={this.props.onCloseModal} className="svg-container">
            <svg  className="x" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: '100',
            height: '100vh'
          }}
        >
        <div onClick={onCloseModal} className="svg-container">
              <svg className="x" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
          </div>
              <div
              style={{
              padding: 0,
              background: '#fff',
              borderRadius: '2px',
              display: 'inline-block',
              margin: '1rem',
              position: 'relative',
              boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
              justifySelf: 'center',
              zIndex: '100',
              width: '450px',
              height: '500px' 
            }} className="homes">
                <div class="home" key={data.index} >
                  <img src={image} alt="House 2" class="home__img" />
                  <div class="home__like" >
                      <i class="heart icon"></i>
                  </div>
                  <h5 class="home__name">{data.address}</h5>
                  <div class="home__location">
                      <div>
                          <i class="map marker icon"></i>
                      </div>
                      <p >{data.city}</p>
                  </div>
                  <div class="home__rooms">
                      <div>
                          <i class="user outline icon"></i>
                      </div>
                      <p >{rooms} bedrooms</p>
                  </div>
                  <div class="home__area">
                      <div>
                          <i class="external alternate icon"></i>
                      </div>
                      <p>{data.floorSpace} m<sup>2</sup></p>
                  </div>
                  <div class="home__price">
                      <div>
                          <i class="key icon"></i>
                      </div>
                      <p >${data.price}</p>
                  </div>
                  <Link to={{ pathname: '/SignIn' }} className="btn home__btn"><span style={{ marginLeft:'35%'}} className="contact">Contact realtor</span></Link>
                  </div>
              </div>
            </div>
        </div>,
      this.el
    )
  }
}

export default ListingModal;
*/