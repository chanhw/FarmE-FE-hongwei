import React, { useRef, useState } from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';

import Modal from './components/modal/Modal'

const App = () => {

  // State Variables
  const [panelModal, setPanelModal] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState(false);

  // 3d model
  const sunnyCloudId = "3ee877df-b26a-4aa6-aa39-e7cc307147f2";
  const rainingCloudId = "efe553be-931b-4e28-8b00-b7f012689dd1";
  const dustGrassId = "7d2f27d9-16ae-493e-b7e4-549ba2814b74";
  const sunnyCloud = useRef();
  const rainingCloud = useRef();
  const dustGrass = useRef();

  // const [panels, setPanels] = useState([
  //   {id: 1 , status: "selected", isFaulty: true},
  //   {id: 2 , status: "", isFaulty: true},
  //   {id: 3 , status: "", isFaulty: false},
  //   {id: 4 , status: "", isFaulty: false},
  // ]);

  // Functions
  // const selectPanel = (id) => {
  //   setPanels(panels.map(panel => { 
  //     panel.status = (id !== panel.id) ? "" : "selected";
  //     return panel;
  //   }));
  // }

  const onLoad = (spline) => {
    const sun = spline.findObjectById(sunnyCloudId);
    const rain = spline.findObjectById(rainingCloudId);
    const dust = spline.findObjectById(dustGrassId);
    sunnyCloud.current = sun;
    rainingCloud.current = rain;
    dustGrass.current = dust;
  }

  const sunny = () => {
    sunnyCloud.current.emitEvent('keyDown', sunnyCloudId);
  }

  const rainy = () => {
    rainingCloud.current.emitEvent('keyDown', rainingCloudId);
  }

  const dusty = () => {
    dustGrass.current.emitEvent('keyDown', dustGrassId);
  }

  const clickPanel = (e) => {
    console.log(e);
    setSelectedPanel(e.target);
    setPanelModal(true);
  }

  const closeModal = () => {
    setPanelModal(false);
  }

  return (
    <div className='hero'>
      <Spline className='model' onLoad={onLoad} scene="https://prod.spline.design/PkvzSn7KnjFOr1vS/scene.splinecode"  onSplineMouseDown={clickPanel}/>
      {/* <Spline className='model' onLoad={onLoad} scene="https://prod.spline.design/S60mCdJP-1Eeq9Ce/scene.splinecode" onSplineMouseDown={clickPanel}/> */}
      {/* <Spline className='model' scene="https://prod.spline.design/muWnpjtHv-teE87E/scene.splinecode" onSplineMouseDown={clickPanel}/> */}
      {/* <div className='panel-list'>{panels.map((panel) => <SolarPanelIcon panel={panel} onClick={selectPanel} key={panel.id}></SolarPanelIcon>)}</div> */}

      <div className='buttons'>
        <button onClick={sunny}>sun</button>
        <button onClick={rainy}>rain</button>
        <button onClick={dusty}>dust</button>
      </div>

      {/* pop up modal */}
      <Modal isOpen={panelModal} close={closeModal}> 
        <h3>{selectedPanel.name}</h3>
        <p>ID: {selectedPanel.id}</p>
      </Modal>
    </div>
  );
}

export default App;
