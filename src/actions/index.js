export function updateDistance(distance) {
   return {
      type: 'UPDATE-DISTANCE',
      payload: distance
   }
}
export function updateSpeed() {
   return {
      type: 'UPDATE-SPEED'
   }
}
export function updateTime(time) {
   return {
      type: 'UPDATE-TIME',
      payload: time
   }
}
export function markTimeInvalid() {
   return {
      type: 'MARK-TIME-INVALID',
   }
}
export function markDistanceInvalid() {
   return {
      type: 'MARK-DISTANCE-INVALID',
   }
}