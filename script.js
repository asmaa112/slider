let images = ["g1.jpg", "g2.png", "g3.png"]
let count = 0;
let button1 =document.getElementById('button1')
let button2 = document.getElementById('button2') 
let photo = document.getElementById('photo') 
let y = setInterval(clickbtn2,2000)
function clickbtn1(){
    if(count > 0)
    {
        count--;
        console.log(count)
        photo.src = images[count];
    }
    else
    {
        count = images.length - 1
        photo.src = images[count];
    }
}
// setInterval(
    function clickbtn2(){
       
    if(count < images.length -1 )
    {
        count++;
        photo.src = images[count];
    }
    else
    {
        count = 0
        photo.src = images[count];

    }
   
}
y;
// },2000)