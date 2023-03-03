
let tickets = {

}

class flightClass {

    #user = {
        id : 1,
        seatNum:[],
        flightNum:[],
        travelDate:[],
        depArr:[]
    };

    constructor(num){
        this.#user.id = num ;
        this.#setData();
    }

    //#region  user id
    getUserId(){
        return this.#user.id ;
    }
    //#endregion

    //#region  seat number
    setSeatNum(num){

        this.#user.seatNum.push(num);
        this.#setData();

    }

    getSeatNum(){

        return this.#user.seatNum
    }

    //#endregion

    //#region  flight number
    setflightNum(num){

        this.#user.flightNum.push(num)
        this.#setData();

    }

    getflightNum(){

        return this.#user.flightNum
    }

    //#endregion

    //#region travel date
    settravelDate(num){

        this.#user.travelDate.push(num)
        this.#setData();

    }

    gettravelDate(){

        return this.#user.travelDate
    }
    //#endregion
    
    //#region depature and arrival
    setdepArr(dep , arr){

        this.#user.depArr.push({dep,arr}) 
        this.#setData(); 

    }

    getdepArr(){

        return this.#user.depArr
    }
    //#endregion

    //#region set to main object

    #setData(){
        tickets[this.#user.id] = this.#user
    }

    //#endregion

    //#region display all data
    displayAllData(){

        return tickets[this.#user.id];
            
    }
    //#endregion
}


module.exports = {

    ticket : flightClass
}