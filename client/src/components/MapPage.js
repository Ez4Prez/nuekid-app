// import ShopItem from './ShopItem'
// import { useMemo } from 'react';
// import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

// function MapPage ({items, addToCart}) {

//     const {} = useLoadScript({googleMapsApiKey: "AIzaSyDxu5xx0VLn8D0D2ri76u89wKQqt50u74I"})

//     return (
        
//         <>

//            <h1>My Map</h1>
//         </>
//     )
    
// }

// export default MapPage;

import React, {useRef} from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function MapPage(){
    const{} = useLoadScript({
        googleMapsApiKey: "AIzaSyDxu5xx0VLn8D0D2ri76u89wKQqt50u74I",
    })


  return (
    <>
      <h1>My Map</h1>
    </>
  );
};

export default MapPage;
