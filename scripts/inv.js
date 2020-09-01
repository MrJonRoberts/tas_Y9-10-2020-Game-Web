// updated 31-09-20
// inventory system
/*
    the inventory is a list of itmes that we can:
        add to 
        remove (drop)
        use from
    the list should be sorted by item type, name then qty.
*/

/*
    Items:
      
        desc
        value
        quality
        name
        size
        weight
        effect / duration
        icon
        sound
        type - potion, weapon, treasure

*/

class Item{
    name;
    desc;
    value;
    quality;
    size;
    weight;
    effect;
    icon;
    type;
    uuid;
   
    constructor(name, desc, value, quality, size, weight, vol, effect, icon, type){
        this.name = name;
        this.desc = desc;
        this.value = value;
        this.quality = quality;
        this.size = size;
        this.weight = weight;
        this.vol = vol;
        this.effect = effect;
        this.icon = icon;
        this.type = type; 
        this.uuid = this.guid();
       
        displayOutput("Created "+ this.name);
        
        
    }
//    guid(){
//        return    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//        return v.toString(16);
//    });
//    }
    
//     getImage(){
//       return "<img class='icon' id='' width='25px' src='images/icons/"+this.type + "/"+this.icon + ">"
//   }
    
 }


class Inv{
    items;
    name;
    maxSize;    // item size
    maxVol; // item vol
    maxWeight;  // weight
    curSize;
    curWeight;
    curVol;
    
    
    constructor(name, maxSize, maxCapacity, maxWeight){
        this.name = name;
        this.maxSize = maxSize;
        this.maxCapacity = maxCapacity;
        this.maxWeight = maxWeight;
        this.curSize = 0;
        this.curWeight = 0;
        this.curCapacity = 0;
        this.items = [];
        this.display();
    }
    
 
   addItem(theItem){
       
       if ( (theItem.size < this.maxSize)  &&   // checks if the item size lt maxsize
           (this.curCapacity + 1 < this.maxCapacity) && // capacity of container + 1 lt maxCap
           (this.curWeight + theItem.weight < this.maxWeight) ){
           
            this.items.push(theItem);    
            displayOutput("Added: "+ theItem.name + " to "+ this.name);
            this.curWeight += theItem.weight;
            this.curCapacity += 1;
           
           
       } else {
           displayOutput("Cannot add "+ theItem.name + " to "+ this.name);
       }
       
   }
    
   display(){
       var dispalyStr = this.name + ":<br/>";
       dispalyStr += "There are " + this.items.length + " items in " + this.name +"<br/>";
       if (this.items.length != 0){
           dispalyStr += "<ul>";
           for (var i = 0; i < this.items.length; i++){
               dispalyStr += "<li>"+    this.getImage() + " "+ this.items[i].name + "</li>";
           }
           dispalyStr += "</ul>";
       }
       
       displayOutput(dispalyStr)
   }
    
  
    
   
}


function displayOutput(msg){
    console.log(msg);
    $("#message").append(msg + "<br/>");
}


// add click event to run a function on our button.
// 1.  function to run
// 2.  add function to events.
//1
//function createItem(){
//    displayOutput("Creating Item");
//    
//    // random weapon
//    //constructor(name, desc, value, quality, size, weight, vol, effect, icon, type)
//    var name = "Sword of Truth";
//    var desc = "This is a random sword";
//    var value = Math.floor(Math.random()* 400 +1);
//    var quality = "Random Quality - Poor, Common, Uncommon, Rare, Epic, Legendary";
//    var size = Math.floor(Math.random() * 3 +1);
//    var weight = Math.floor(Math.random() * 2 + 1);
//    var vol = 1;
//    var effect = "Random Effect";
//    var icon = "sword-brandish.png";
//    var type = "weapon";
//    
//    var weapon = new Item(name, desc, value, quality, size, weapon, vol, effect, icon, type);
//    
//    displayOutput("Created "+ weapon.name + " value: "+ weapon.value);
//    // add wepon button to items 
//    
//    $("#items").append(weapon.getImage())
//    $("#"+this.weapon.uuid).click(function(){
//        displayOutput("picup weapon");
//    })
//    
//    
//    
//}
////2
//$("#createItem").click(function(){
//   createItem(); 
//});






// below here is our app logic so far.

sword = new Item("A basic sword", "this sword is very rusty", 10, 
                 "poor", 3,1,1,"basic damage", "sword-brandish.png", "weapon");


potion = new Item("A health potion", "this potion looks green and glows", 150, 'common', 1,1,1,"basic health", "coffee-cup.png", "food");

inv = new Inv("bag", 10,10,10);
inv.addItem(sword);
inv.addItem(potion);
inv.display();

