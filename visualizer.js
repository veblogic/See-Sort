/*
* Array of the elements to sort
* Each element will correspond to a bar in the chart
*/
var arrayToSort;


//add event Listeners
registerListeners();


/*
 * Register Event listeners
 */
function registerListeners(){
    document.getElementById("array_size").addEventListener("input",createNewArray);
    document.getElementById("newArrayBtn").addEventListener('click',createNewArray);
    document.getElementById("bubbleSortBtn").addEventListener('click',bubbleSort);
    document.getElementById("selectionSortBtn").addEventListener('click',selectionSort);
}

/*
 * Bubble sorting
 * sort an array by repeatedly swapping the adjacent elements if they are in wrong order.
 */
async function bubbleSort(){
    var size = arrayToSort.length;
    for(var pass=0;pass<size-1;pass++){
        for(var index=0;index<size-pass-1;index++){
            var element1 = document.getElementById(index);
            var element2 = document.getElementById(index+1);    
   
            element1.style.background="red";
            element2.style.background="red";

            if(arrayToSort[index]>arrayToSort[index+1]){
                
                var delay = 1000-document.querySelector("#speed").value;
                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, delay);
                });
                swapElements(element1,element2);
                swapItems(index,index+1);
            }

            element1.style.background="goldenrod";
            element2.style.background="goldenrod";
        }
        
        element2.style.background="green";
    }
}

/*
 * Selection sort :
 * sorts an array by repeatedly finding the minimum element (considering ascending order) 
 * from unsorted part and putting it at the beginning
 */
async function selectionSort(){
    var size = arrayToSort.length;

    for(sortIndex=0;sortIndex<size;sortIndex++){
        var minIndex = getMinimumIndex(arrayToSort,sortIndex);

        var element1 = document.getElementById(sortIndex);
        var element2 = document.getElementById(minIndex);    

        element1.style.background="red";
        element2.style.background="red";

        var delay = 1000-document.querySelector("#speed").value;
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, delay);
        });

        swapElements(element1,element2);
        swapItems(sortIndex,minIndex);

        element1.style.background="goldenrod";
        element2.style.background="goldenrod";

        element1.style.background="green";
    }

}

/*
 * returns the minimum element in a given array
 * array : array of elements
 * i : start index of unsorted array
 */
function getMinimumIndex(array,i){
    var minIndex = i;  //index of minimum element
    var minimum = array[i]; //minimum element
    for (let index = i; index < array.length; index++) {
        if(array[index]< minimum){
            minimum = array[index];
            minIndex = index;
        }
    }
    return minIndex;
}

/*
 * Swap array items
 */
function swapItems(i,j){
    var temp = arrayToSort[j];
    arrayToSort[j] = arrayToSort[i];
    arrayToSort[i] = temp;
}

/*
 * Swap elements
 * el1,el2 : div elements to swap
 */
function swapElements(el1, el2){

    const transform1 = window.getComputedStyle(el1).getPropertyValue("height"); //current height of first element
    const transform2 = window.getComputedStyle(el2).getPropertyValue("height"); // current height of second element

    el1.style.height = transform2;
    el2.style.height = transform1;
}

/*
 * Create new array of random integers and instantiate a bar chart corresponding to array
 */
function createNewArray() {

    var arraySize = document.querySelector("#array_size").value;

    arrayToSort = new Array();

    var barChart = document.getElementById("barChart");

    //Remove existing bars in the chart
    if(barChart){
        while(barChart.firstChild){
            barChart.removeChild(barChart.firstChild);
        }
    }

    //Populate bars in the chart
    for (let index = 0; index < arraySize; index++) {
        var barItem = Math.floor(Math.random() * 100)+1;
        arrayToSort.push(barItem);

        var div = document.createElement("div");
        div.setAttribute("class", "bar");
        div.setAttribute("id",index);

        var barHeight = barItem*5 + "px";
        div.style.setProperty('height', barHeight);

        document.getElementById("barChart").appendChild(div);
    }
}


