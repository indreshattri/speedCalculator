function rootReducer(state, action) {
  switch(action.type) {
    case 'UPDATE-SPEED':
      return updateSpeedReducer(state,action);
    case 'UPDATE-DISTANCE':
      return Object.assign({}, state, {
        distance: action.payload,
        isDistanceValid: true
      })
    case 'UPDATE-TIME':
    	return Object.assign({}, state, {
        time: action.payload,
        isTimeValid: true
      })
    case 'MARK-TIME-INVALID':
      return Object.assign({}, state, {
        isTimeValid: false
      })
    case 'MARK-DISTANCE-INVALID':
      return Object.assign({}, state, {
        isDistanceValid: false
      })
    default:
        return state;

  }
}

function updateSpeedReducer(state, action) {
	if(state.distance && state.time && state.time !== 0) {
        let newCalc = ['Distance: ' + state.distance + ' Time: ' + state.time + ' Speed: ' + Number((state.distance/state.time).toFixed(2))];
        let fiveCalcs = newCalc.concat(state.lastFiveCalc);
        fiveCalcs.length = fiveCalcs.length < 5? fiveCalcs.length : 5 ;
        return Object.assign({}, state, {
          speed:Number((state.distance / state.time).toFixed(2)),
          lastFiveCalc: fiveCalcs
        })
    }else {
        return state;
    }
}

export default rootReducer;