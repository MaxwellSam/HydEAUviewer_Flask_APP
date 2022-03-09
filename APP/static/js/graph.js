/**
 * FileName: map.js
 * date: 03/2022
 * Description: Map for hydrEAUviewer APP
 */

// -------------------------------- variables --------------------------------

// ----------------------------- Usefull methods -----------------------------

const generate_arg_req = (args) => {
    var req = [];
    for (let k in args){
        req.push(k+"="+args[k]);
    } 
    return "?"+req.join("&");
}

// ------------------------------- Graph Class -------------------------------

class Graph_Station {
    // =============== Attributes ===================
    // Inputs user
    params_hydro = document.getElementById("params_hydro");
    // graph config 
    graphDiv = document.getElementById("graphDiv");

    constructor(){}

    initialize(data_station){
         
    }

    select_translator(hydro_measure){
        if (hydro_measure == "H"){
            return 
        }

    }

    format_dataset(data_station){
        labels = data_station.Select();
        data = [];

    }

}