console.log(" ");

function feetToMile(feet_value){

    var mile=feet_value*0.000189394;
    mile=mile.toFixed(6);

    if(feet_value<0)
        {
         console.log("Invalid Input, Negative value can not be calculated");
        }
    else{
         console.log(feet_value+" feet equals "+mile+" mile");
        }   
}

feetToMile(300);

console.log(" ");

function woodCalculator(chair,table,bed){
    var total_wood;

    if(chair<0 && table<0 && bed<0){
        console.log("Invalid Input Please Enter Positive Numbers");
    }
    else{
        total_wood=chair+table*3+bed*5;
        console.log("The total cubic_feet of needed wood is : "+total_wood);
    }
}

woodCalculator(3,2,1);

console.log(" ");


 function brickCalculator(floor_count){

    var brick_count;
    if(floor_count<0){
        console.log("Invalid Input")
    }
    else if(floor_count<11){
        brick_count=floor_count*15*1000;
    }
    else if(floor_count<21 ){
        brick_count=15*10*1000+(floor_count-10)*12*1000;
    }
    else{
        var rest_floors=floor_count-20;
        brick_count=15*10*1000+12*10*1000+10*rest_floors*1000;
    }
    return brick_count;
 }

 console.log("Total Brick Count= "+brickCalculator(22));



 console.log(" ");



 var names=['ali','zaker','zuckerberg','Shams','abu'];

 

function tinyFriend(names){
    var n=names.length;
    var small_name_size=names[0].length;
    var small_name=names[0];
    for(var i=0;i<n;i++)
    {
        if(names[i].length<small_name_size)
        {
            small_name=names[i];
            small_name_size=names[i].length;
        }
    }
   

    var list=[];
    n=small_name.length;
    for(i=0;i<names.length;i++)
    {
        if(names[i].length==n)
        {
            list.push(names[i]);
        }
    }

    console.log(list);
}

tinyFriend(names);



