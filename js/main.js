document.addEventListener('DOMContentLoaded', (event) => {

    var height=513;

    


    // window.addEventListener('resize', () =>{
    //     console.log("SCREEEN WIDT",screen.width);
    //     if(screen.width > 1075){
    //         height=513;
    //         console.log("height", height);
    //     } else if (screen.width < 1075){
    //         height=256.5;
    //         console.log("height piccolo", height);
    //     }

    // });


    var image =  document.getElementById('first-section-animation');
    // parte relativa al caricamento dell'immagine...appena l'immagine si carica allora parte l'animazione

    loadImage(image)
        .then(result => {document.getElementById("preLoadImage").classList.add('opacityZero');
                         console.log("l'immagine è", result); })
        .catch(error => console.log("error", error));        

    // variabili generali
    // var height=513;
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

        // if(screen.width > 1075){
        
        //     height=513;
        //     console.log("entrato in IF",height);
        // } else {
    
        //     height=256.5;
        //     console.log("entrato in ELSEIF",height);
        // }

        

        

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
            console.log("POSITION", position);
            
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
                        console.log(position);
                    } 
                    else if (currentFrame == totFrames )  {                    
                        image.setAttribute("data-frame" , "end");
                        position = -height *currentFrame ;
                        currentFrame--;                    
                        image.setAttribute("data-num" , currentFrame);    
                        console.log(position);                  
                    }
                    else if ( currentFrame < totFrames  && currentFrame > 18 &&  (image.getAttribute("data-frame") == "end") ) {
                        position = -height *currentFrame;                                          
                        currentFrame--;
                        image.setAttribute("data-num" , currentFrame); 
                        console.log(position);
                    }    
                    else { 
                        position = position - height;     
                        image.setAttribute("data-frame" , "start");
                        image.setAttribute("data-num" , currentFrame);  
                        console.log(position);                       
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
                        
                        triangleTextUnderline.classList.add('hidden'); 
                        clearInterval(nID);  
                    }
                } , interval );  

            }   

        }

    });   

    
    // var sections = document.querySelectorAll('.sect');

    // for (var i=0; i<sections.length; i++){
    //     sections[i].addEventListener("mouseover", ev => {

    //         console.log(ev.explicitOriginalTarget.attributes[0]);   
    //     });
    // }
    
   

        
} ,true);






// funzione asincrona dedicata al caricaemnto dei render nella pagina
async function loadImage(elem) {
    return new Promise((resolve, reject) => {
                        elem.onload = () => resolve(elem);
                        elem.onerror = reject;      
    });
 }

 function loggo (){
     console.log("ewewewewewewewewwewewewewe");
 }