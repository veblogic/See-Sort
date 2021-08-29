/*
 * Main
 */
document.getElementById("newArrayBtn").addEventListener('click',createNewArray);



/*
 * Create new array of random integers and instantiate a bar chart corresponding to array
 */
function createNewArray() {
    /*
    * Array of the elements to sort
    * Each element will correspond to a bar in the chart
    */
    var arrayToSort = new Array();

    var barChart = document.getElementById("barChart");

    //Remove existing bars in the chart
    if(barChart){
        while(barChart.firstChild){
            barChart.removeChild(barChart.firstChild);
        }
    }

    //Populate bars in the chart
    for (let index = 0; index < 99; index++) {
        var barItem = Math.floor(Math.random() * 100)+1;
        arrayToSort.push(barItem);

        var div = document.createElement("div");
        div.setAttribute("class", "bar");

        var barHeight = barItem*5 + "px";
        div.style.setProperty('height', barHeight);

        document.getElementById("barChart").appendChild(div);
    }
}


