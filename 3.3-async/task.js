class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(timeToStart, fn, timerId2){
    if (!timerId2) {
      throw new Error ('timerId не передан!');
    }

    // if (this.timerId == timerId2) {
    //   console.error('такой ID уже существует');
    // } else {
    //   this.alarmCollection.push(
    //     {id: timerId2,
    //      time: timeToStart,
    //      callback: fn
    //     });
    // }

    const found = this.alarmCollection.some(el => el.id === timerId2);
    if (!found) {
      this.alarmCollection.push({ id: timerId2, time: timeToStart, callback: fn});
    }else console.error('такой ID уже существует');
  }


  removeClock(idToFind){
    const elementToDelete = this.alarmCollection.filter(e => e.id == idToFind)[0];
    const index = this.alarmCollection.indexOf(elementToDelete);
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
      if (this.getCurrentFormattedTime() === alarm.time) alarm.callback();
    }

    if (!this.timerId) {
      this.timerId = setInterval(function(){
        this.alarmCollection.forEach(checkClock);
      }, 1000); 
    }
  }


  stop(){
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }


  printAlarms() {
    this.alarmCollection.forEach((element) => console.log(element.id, element.time));
  }


  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
  }

}


// function testCase () {
//   let a = new AlarmClock();
//   a.addClock('18:13', () => console.log('пора вставать'), 1);
//   a.addClock('18:14', () => {console.log('Давай, вставай уже!'); a.removeClock(2)}, 2);
//   a.addClock('18:15', () => {
//     console.log('Вставай, а то проспишь!');
//     //a.clearAlarms();
//     a.printAlarms();
//   },3);
  
//   a.addClock('18:13', () => console.log('пора вставать'), 1);

//   a.printAlarms();
//   a.start();

// }