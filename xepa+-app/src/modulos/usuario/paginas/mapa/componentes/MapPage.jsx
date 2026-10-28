import { GoogleMap, useJsApiLoader, Marker } from 
'@react-google-maps/api'
import Styles from '../css/MapPage.module.css'
import logoXepa from '../../../imgs/logo colorida.png'

function MapPage(){
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBXOjzHfR4E1F2aVvoVwsfFPX33BZto2H8',
  });
  const position = {
        lat:-23.5280859,
        lng:-46.6917602,
  };
    return(
      

            <div className={Styles.map}>
                {isLoaded ? (
    <GoogleMap
      mapContainerStyle={{width:'100%',height:'100%'}}
      center={position}
      zoom={15}
      >
        <Marker
          position={position}
          icon={{
            url: logoXepa,
            scaledSize: { width: 48, height: 48 },
            anchor: { x: 24, y: 24 },
          }}
        />
      </GoogleMap>
  ) : (
    <></>)}</div>
    )
}
export default MapPage