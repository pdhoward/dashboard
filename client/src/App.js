import React, { useState, useEffect} from 'react';
import axios from 'axios'
import DonutComponent from './components/DonutChart/DonutComponent';
import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';

const App = (props) => {

  // React hooks with common state values for all components 
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [groupColour, setGroupColour] = useState('lightgrey');
  const [visitorCount, setVisitorCount] = useState(0)
  const [data, setData] = useState({ hits: [] });
  const [venue, setVenue] = useState([])
  const [brand, setBrand] = useState([{
    "group": "All",
    "category": "Nabisco",
    "measure": 753
  }])
  const [trend, setTrend] = useState([{
    "group": "All",
    "category": "August",
    "measure": 54964
  }])
 
  useEffect(async () => {
    // const result = await axios(
    //   'https://hn.algolia.com/api/v1/search?query=redux',
    // );
 
    // setData(result.data);

    const fetchData = async() => {
      console.log(`----inside of app--------------`)
      const venueData = await axios('http://localhost:5000/api/venue') 
      const brandData = await axios('http://localhost:5000/api/brand')
      const trendData = await axios('http://localhost:5000/api/trend')
      console.log(venueData)
      console.log(brandData)
      console.log(trendData)
      setVenue(venueData.data)
      setBrand(brandData.data)
      setTrend(trendData.data) 
      
    }

    fetchData()
  }, []);

  //function that will hook into the state to change it 
  const updateBarChart = (group, colour) => {    
    setSelectedGroup(group);
    setGroupColour(colour);
  }

  const updateVisitorCount = (cnt) => {
    setVisitorCount(cnt)
  }

  return(
  <div>
    <svg viewBox="-2 0 100 50" preserveAspectRatio="xMidYMid meet"> 
      <DonutComponent x={15} y={20} donutChartData={venue} onChangeGroup={updateBarChart}/>
      <BarChart positionX={35} positionY={50} width={80} height={100} barChartData={brand} selectedGroup={selectedGroup} barColour={groupColour}/>
      <LineChart positionX={35} positionY={4} lineChartData={trend} selectedGroup={selectedGroup} lineColour={groupColour} />
      
    </svg> 
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
    
  </div>
  );

};


export default App;
