
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import { Icon } from "leaflet";

function MapPage({ locations }) {



  return (
    <>
      <div >
        <MapContainer className='map-container' center={[40.678177, -73.944160]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>

      <div class="container-fluid" id="event-container">
        <h1>Upcoming Events:</h1>
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Flag Football</h2>
            <h3 class="card-subtitle">Verrazano Sports Complex</h3>
            <h3 class="card-subtitle">08/09/23</h3>
            <div class="card-text">Join us this sunday for 4 on 4 flag football! Bring your A game and plenty of water!</div>
            <btn class="btn" id="event-container-btn">Join Activity</btn>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Pickup Basketball</h2>
            <h3 class="card-subtitle">Sid Luckman Field</h3>
            <h3 class="card-subtitle">08/05/23</h3>
            <div class="card-text">Come hoop with us!</div>
            <btn class="btn" id="event-container-btn">Join Activity</btn>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Cycling Group</h2>
            <h3 class="card-subtitle">Prospect Park</h3>
            <h3 class="card-subtitle">08/02/23</h3>
            <div class="card-text">Come cycle with us. Leaving bright and early</div>
            <btn class="btn" id="event-container-btn">Join Activity</btn>
          </div>
        </div>
      </div>

      <div class="container" id="location-container">
        <div class="card">
          <div class="card-body">
            {/* <img class="card-img">*Location Pic*</img> */}
            <h2>Verrazano Sports Complex</h2>
            <div class="card-text">Event Info</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;
