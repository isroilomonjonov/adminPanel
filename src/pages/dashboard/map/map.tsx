import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useSelector } from "react-redux";
const Maps = () => {
  const maps = useSelector((state: any) => state.data.map);
  return (
    <div>
      <YMaps>
        <Map
          width="100%"
          defaultState={{
            center: [41.3123, 69.2787],
            zoom: 10,
          }}
        >
          {maps?.map((i: any) => (
            <Placemark key={i.id} geometry={[ i.lattidude,i.longitude]} /> 
          ))}
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;
