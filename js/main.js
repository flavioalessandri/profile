var image =  document.getElementById('first-section-animation');

loadImage(image)
    .then(result => {
        document.getElementById("preLoadImage").classList.add('opacityZero');
        document.querySelector(".spinner").classList.add('opacityZero');
         console.log("l'immagine è", result); })
    .catch(error => console.log("error", error));   

document.addEventListener('DOMContentLoaded', () => {
    

    const hamburgerJson = `{"v":"5.7.5","fr":30,"ip":0,"op":39,"w":330,"h":269,"nm":"Grafica 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[162,139,0],"ix":2,"l":2},"a":{"a":0,"k":[744,-300,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":25,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":28,"s":[123,123,100]},{"t":35,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":5,"s":[{"i":[[-57.161,0],[0,-3.01],[57.161,0],[0,8.25]],"o":[[57.161,0],[0,9.25],[-57.161,0],[0,-5.25]],"v":[[6,-0.5],[100.5,3.25],[6,10.5],[-93.75,4.25]],"c":true}]},{"i":{"x":0.199,"y":1},"o":{"x":0.256,"y":0},"t":7,"s":[{"i":[[-57.159,0.56],[-69.89,-13.312],[57.161,0],[0.25,8.25]],"o":[[51,-0.5],[10.5,2],[-57.162,0],[78.5,-9]],"v":[[7.5,-39.75],[99.75,3],[5,23.75],[-94,5]],"c":true}]},{"i":{"x":0.582,"y":1},"o":{"x":1,"y":0},"t":15,"s":[{"i":[[-57.161,0],[0,-57.161],[57.161,0],[0,57.161]],"o":[[57.161,0],[0,57.161],[-57.161,0],[0,-57.161]],"v":[[6,-0.5],[103.5,0],[6,10.5],[-103.5,0]],"c":true}]},{"t":25,"s":[{"i":[[-57.161,0],[0,-57.161],[57.161,0],[0,57.161]],"o":[[57.161,0],[0,57.161],[-57.161,0],[0,-57.161]],"v":[[0,-103.5],[103.5,0],[0,103.5],[-103.5,0]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.92549020052,0.843137264252,0.427450984716,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[744.5,-302.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":5,"op":39,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[158,282.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[194,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.925490260124,0.843137323856,0.427451014519,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"fl","c":{"a":0,"k":[0.925490260124,0.843137323856,0.427451014519,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 2","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[7,-73],"to":[0,-11.5],"ti":[0,11.5]},{"t":5,"s":[7,-142]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 3","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[194,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.925490260124,0.843137323856,0.427451014519,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"fl","c":{"a":0,"k":[0.925490260124,0.843137323856,0.427451014519,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 2","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,-141],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[194,10],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.925490260124,0.843137323856,0.427451014519,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"fl","c":{"a":0,"k":[0.925490260124,0.843137323856,0.427451014519,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 2","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[8,-214],"to":[0,12],"ti":[0,-12]},{"t":5,"s":[8,-142]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":5,"st":0,"bm":0}],"markers":[]}`;

    var hamburger = document.getElementById("hamburger");

    var hamburgerAnimation = bodymovin.loadAnimation({
        container : hamburger,
        render: 'svg',
        loop: false,
        autoplay:false,
        animationData: JSON.parse(hamburgerJson)
        });

    var height=513;

    
    // parte relativa al caricamento dell'immagine...appena l'immagine si carica allora parte l'animazione

    
    
    document.getElementById("hamburger").addEventListener('click', (ev) => {
        
        // console.log(ev.target);
        
        if(hamburger.classList.contains('toggleNav')) {
            
            document.querySelector('.nav-bg').classList.add('closed');
            document.querySelector('.nav-bg').classList.remove('open');
            document.querySelector('.nav-content').classList.add('hidden');
            
            setTimeout(()=>{document.getElementById('header').style.zIndex = "-1"; },1000);
                

                hamburger.classList.remove('toggleNav');                
                hamburgerAnimation.setDirection(-1);
                hamburgerAnimation.play();        
            }  
            else{
                document.querySelector('.nav-bg').classList.remove('closed');
                document.querySelector('.nav-bg').classList.add('open');
                document.querySelector('.nav-content').classList.remove('hidden');
                document.getElementById('header').style.zIndex = "10";


                hamburger.classList.add('toggleNav');                
                hamburgerAnimation.setDirection(1);
                hamburgerAnimation.play();
            } 
        }) 


    // variabili generali

    var tID = null;  //variabile setInterval
    var nID = null; //variabile setInterval
    var main = document.getElementById('main');
    var totFrames = 47;
    var currentFrame = parseInt(image.getAttribute("data-num")); 
    var triangleTitle = document.getElementById('first-section-title');  
    var triangleTextUnderline = document.getElementById('first-section-line');

    const int = 37;
    const interval = 30;  

    main.addEventListener("click", () => { 
    
        document.getElementById("preLoadImage").classList.add('hidden');       
        
        if(main.classList.contains('on')) {

            main.classList.remove('on');
            main.classList.add('off');

            document.getElementById("first").classList.remove('hidden');


            triangleTitle.classList.remove('hidden'); 
            triangleTitle.classList.add('transitionAnimRight');    
            triangleTitle.classList.remove('hideTransitionAnimRight');   
            
            triangleTextUnderline.classList.remove('hidden'); 
            
            var position = -height * currentFrame; 
            // console.log("POSITION", position);
            
            if (image.getAttribute("data-click") === "on") {             
                
                image.classList.add('on');
                image.setAttribute("data-click" , "off"); 
    
                tID = setInterval ( () => { 
                
                image.style.top = `${position}px`; 
                    if (currentFrame < totFrames &&  (image.getAttribute("data-frame") == "start"))
                    { 
                        position = -height *currentFrame;                         
                        currentFrame++;
                        image.setAttribute("data-num" , currentFrame); 
                        // console.log(position);
                    } 
                    else if (currentFrame == totFrames )  {                    
                        image.setAttribute("data-frame" , "end");
                        position = -height *currentFrame ;
                        currentFrame--;                    
                        image.setAttribute("data-num" , currentFrame);    
                        // console.log(position);                  
                    }
                    else if ( currentFrame < totFrames  && currentFrame > 18 &&  (image.getAttribute("data-frame") == "end") ) {
                        position = -height *currentFrame;                                          
                        currentFrame--;
                        image.setAttribute("data-num" , currentFrame); 
                        // console.log(position);
                    }    
                    else { 
                        position = position - height;     
                        image.setAttribute("data-frame" , "start");
                        image.setAttribute("data-num" , currentFrame);  
                        // console.log(position);                       
                    }  
                } , int );      
            }
  
        } 
        else { 
            clearInterval(tID);  
            if(currentFrame > 10) {

             nID = setInterval ( () => { 

                    if(currentFrame > 0) {
                        image.style.top = `${position}px`; 
                        position = -height *currentFrame;                                          
                        currentFrame--;   

                        document.getElementById("first").classList.add('hidden');                      
                        
                        triangleTitle.classList.remove('transitionAnimRight'); 
                        triangleTitle.classList.add('hideTransitionAnimRight');  

                    } else {  
                        main.classList.remove('off');            
                        main.classList.add('on');   
                        image.setAttribute("data-num" , 0);
                        image.setAttribute("data-frame", "start");    
                        image.setAttribute("data-click", "on");  
                        
                        clearInterval(nID);  
                    }
                } , interval );  
                
                triangleTextUnderline.classList.add('hidden'); 
                                    
            }   

        }

    });   
        
} ,true);


// funzione asincrona dedicata al caricaemnto dei render nella pagina
async function loadImage(elem) {
    return new Promise((resolve, reject) => {
                        elem.onload = () => resolve(elem);
                        elem.onerror = reject;      
    });
 }

 function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i=0, iLen=events.length; i<iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }
  
 

