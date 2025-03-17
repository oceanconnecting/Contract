import React from 'react';
import dynamic from "next/dynamic";
import { contractContent } from "../Data/data";
import {Contract} from '../../../contract';
import getDataContract from '../Data/dataContract';


const LeafletMap = dynamic(() => import("../Banner/leaflet"), { ssr: false });
const contractData = getDataContract();
const Map = () => {
    return (
        <div className="w-full h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <div className="w-8/10 h-full rounded-full">
          {/* Add your map implementation here */}
          <LeafletMap contracts={contractData || []} />
        </div>
      </div>
  
    );
};

export default Map;