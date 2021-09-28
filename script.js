// console.log("app is started.....");
// setTimeout(()=>{
// console.log("app is under developement....");},3000) //blocking code
// setTimeout(()=>{
//     console.log("app is under completed....");},3000) //blocking code
var bodytag=document.getElementById('bodytag');
bodytag.setAttribute('style','background-color:lightblue')
var outerdiv=document.createElement('div')
outerdiv.setAttribute('style','justify-content:center')
outerdiv.setAttribute('style','margin:250px')
// outerdiv.setAttribute('style','background-color:lightblue')
var div=document.createElement('div')
div.setAttribute('style','text-align:center')
outerdiv.append(div)
document.body.append(outerdiv)
//Task
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            setTimeout(() => {
                                setTimeout(() => {
                                    setTimeout(() => {
                                        div.innerHTML=1  
                                        // div.setAttribute('style','color:orange')                                      
                                        setTimeout(() => {
                                           div.innerHTML= "Happy Independence Day"
                                        }, 1000);
                                        
                                    }, 1000);
                                    div.innerHTML= 2
                                }, 1000);
                                div.innerHTML= 3
                            }, 1000);
                           div.innerHTML= 4
                        }, 1000);
                        div.innerHTML= 5
                    }, 1000);
                    div.innerHTML= 6
                }, 1000);
                div.innerHTML= 7
            }, 1000);
            div.innerHTML= 8
        }, 1000);
        div.innerHTML= 9
    }, 1000);
    div.innerHTML= 10
},0);