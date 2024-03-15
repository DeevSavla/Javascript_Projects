setInterval(() => {
    d = new Date();
    htime = d.getHours();  //hours milega present
    mtime = d.getMinutes(); // minute milega present
    stime = d.getSeconds(); //seconds milega present
    hrotation = 30*htime +mtime/2;  //formulas for h,m,s rotation
    mrotation = 6*mtime;
    srotation = 6*stime;

    //transform helps in rotating or doing anything to a object
    //Syntax is object.style.transform=`whattodo(by how much)`
    hour.style.transform = `rotate(${hrotation}deg)`;  
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);

//setInterval matlab usko karte raho every interval second given.