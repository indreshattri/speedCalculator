import React, { Component} from 'react';
import { connect } from 'react-redux'
import { updateSpeed, updateDistance, updateTime, markTimeInvalid , markDistanceInvalid} from '../actions';
import './../css/speedcalculator.css'
import debounce from './../utils'

const mapStateToProps = (state) => {
   return {
   	speed : state.speed,
      isDistanceValid: state.isDistanceValid,
      isTimeValid: state.isTimeValid,
      lastFiveCalc: state.lastFiveCalc
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      distanceUpdated: (distance, isTimeValid) => {
         if(distance !== '' && distance >= 0) {
            dispatch(updateDistance(distance));
            if(isTimeValid)
               dispatch(updateSpeed());
         } else {
            dispatch(markDistanceInvalid());
         }
      },
      timeUpdated: (time,isDistanceValid) => {
         if(time !== ' ' && time > 0) {
            dispatch(updateTime(time));
            if(isDistanceValid)
               dispatch(updateSpeed());
         }else {
            dispatch(markTimeInvalid());
         }
      }
   };
};

class SpeedCalculator extends Component {
   render() {
      let {speed,isDistanceValid, isTimeValid, lastFiveCalc, distanceUpdated,timeUpdated} = this.props;
      let inputDistance,inputTime;
      let calcList = lastFiveCalc.map((calc,index) => 
         <li key={index}> {calc} </li>
      );
      let debounceDistanceFunc = debounce(distanceUpdated,500);
      let debounceTimeFunc = debounce(timeUpdated,500);
      return (
         <div className = "speed-calculator-box">
            <div className="outerBox">
               <span>Enter values of Distance and time to get Speed</span>
               <div className="input-container">
                  <span className="input-label">Distance(miles): </span>
                  <input 
                     onChange={(e) => debounceDistanceFunc( inputDistance.value, isTimeValid)} 
                     ref={node=>(inputDistance=node)} 
                     className="input-field" 
                     type="number">
                  </input>
                  {!isDistanceValid && 
                     <small style={{color:'red'}}>Invalid distance</small>
                  }
               </div>
               <div className="input-container">
                  <span className="input-label">Time(hrs): </span>
                  <div>
                     <input 
                        onChange={(e) => debounceTimeFunc( inputTime.value, isDistanceValid)}
                        ref={node=>(inputTime=node)}
                        className="input-field" 
                        style={{border: isTimeValid ? '1px solid gray' : '1.5px solid red'}}
                        type="number"> 
                     </input>
                     {!isTimeValid && 
                        <small style={{color:'red'}}>Invalid time</small>
                     }
                  </div>
               </div>
               <div className="display-speed">
                  <h4>Speed: {speed ? speed + ' mph': ''} </h4>
               </div>
               <div className="speed-list">
                  <h3>Last 5 calculations</h3>
                  <ul>
                     {calcList}
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedCalculator);