import React from 'react';
import dynamic from "next/dynamic";
import { contractContent } from "../Data/data";
const LeafletMap = dynamic(() => import("../Banner/leaflet"), { ssr: false });
const Map = () => {
    return (
        <div className="w-full h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <div className="w-8/10 h-full rounded-full">
          {/* Add your map implementation here */}
          <LeafletMap contracts={contractContent?.contracts || []} />
        </div>
      </div>
  
    );
};

export default Map;