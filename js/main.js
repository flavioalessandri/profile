document.addEventListener('DOMContentLoaded', (event) => {

    var backgroundElement = document.querySelectorAll('.bkgr');

    addListenerMulti(window, 'mousemove touchmove', (ev) => {

        for (let i = 0; i< backgroundElement.length; i++) {
            
            backgroundElement[i].style.transform  = `translate(${-ev.clientX/40}px, ${-ev.clientY/40}px)`; 
            
            
        }

    }); 

   

    var height=513;

    var image =  document.getElementById('first-section-animation');
    // parte relativa al caricamento dell'immagine...appena l'immagine si carica allora parte l'animazione

    loadImage(image)
        .then(result => {document.getElementById("preLoadImage").classList.add('opacityZero');
                         console.log("l'immagine è", result); })
        .catch(error => console.log("error", error));        

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
  
 

