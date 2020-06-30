class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.timerId;
  }

  addClock(timeToStart, fn, timerId2){
    if (!timerId2) {
      throw new Error ('timerId не передан!');
    }

    if (this.timerId == timerId2) {
      console.error('такой ID уже существует');
    } else {
      this.alarmCollection.push(
        {id: timerId2,
         time: timeToStart,
         callback: fn
        });
    }

    this.timerId = timerId2;
  }

  removeClock(idToFind){
    let elementToDelete = this.alarmCollection.filter(e => e.id == idToFind)[0];
    let index = this.alarmCollection.indexOf(elementToDelete);
    if (index !== -1) {
      this.alarmCollection.splice(index, 1);
      return true;
    }
    return false;
  }

  getCurrentFormattedTime(){
    //let currentTime = new Date().toLocaleTimeString();
    let currentTime = new Date().toTimeString().slice(0,8); //HH:MM:SS
    currentTime = currentTime.substr(0, currentTime.length - 3); //приведение в формат HH:MM
    return currentTime;
  }

  start(){
    function checkClock(alarm){
      if (getCurrentFormattedTime() == alarm.time) return this.callback;
    }

    

  }



}