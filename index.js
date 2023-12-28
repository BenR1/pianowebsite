
/*Sets a variable inside which are all the notes which are actually the piano keys*/
var buttons=document.querySelectorAll(".note");

/*event listener mouse click to each piano key*/
for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){ 
        var buttonInnerHTML=this.innerHTML;
        /*At the click of a mouse it activates the sound, animation, and image*/
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        showImage(buttonInnerHTML);
    }
    )}
/*event listener key press to each piano key, activates the sound, animation, and image*/
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
        showImage(event.key);
    })

  

    var currentAudio;
/*This function receives the input from the event listener and using case activates the appropriate sound*/
    function makeSound(key) {
        switch (key) {
            case 'c':
                currentAudio = new Audio("./sounds/68441__pinkyfinger__piano-c.wav");
                break;
            case 'D':
                currentAudio = new Audio("./sounds/68440__pinkyfinger__piano-c.wav");
                break;
            case 'd':
                currentAudio = new Audio("./sounds/68442__pinkyfinger__piano-d.wav");
                break;
            case 'E':
                currentAudio = new Audio("./sounds/68444__pinkyfinger__piano-eb.wav");
                break;
            case 'e':
                currentAudio = new Audio("./sounds/68443__pinkyfinger__piano-e.wav");
                break;
            case 'f':
                currentAudio = new Audio("./sounds/68446__pinkyfinger__piano-f.wav");
                break;
            case 'G':
                currentAudio = new Audio("./sounds/68445__pinkyfinger__piano-f.wav");
                break;
            case 'g':
                currentAudio = new Audio("./sounds/68448__pinkyfinger__piano-g.wav");
                break;
            case 'A':
                currentAudio = new Audio("./sounds/68447__pinkyfinger__piano-g.wav");
                break;
            case 'a':
                currentAudio = new Audio("./sounds/68437__pinkyfinger__piano-a.wav");
                break;
            case 'B':
                currentAudio = new Audio("./sounds/68439__pinkyfinger__piano-bb.wav");
                break;
            case 'b':
                currentAudio = new Audio("./sounds/68438__pinkyfinger__piano-b.wav");
                break;
                /*With another key gives a warning*/
            default:
                alert("Press the buttons that appear on the piano keys");
                return; 
        }
        currentAudio.play();
    }

/*This function receives the input from the event listener and using case activates the corresponding image*/
    function showImage(key) {
        /*createElement("div") is a method of the document object that creates a new HTML element. In this case, it's creating a div element. This is the new element I added at work*/
        var imageContainer = document.createElement("div");
        imageContainer.className = "image-container";
    
        var image = document.createElement("img");
        image.alt = "Image 1";

        switch (key) {
            case 'c':
                image.src = "images/image_c.png";
                break;
            case 'D':
                image.src = "images/image1.png";
                break;
            case 'd':
                image.src = "images/image2.png";
                break;
            case 'E':
                image.src = "images/image12.webp";
                break;
            case 'e':
                image.src = "images/image13.webp";
                break;
            case 'f':
                image.src = "images/image14.jpg";
                break;
            case 'G':
                image.src = "images/image6.jpg";
                break;
            case 'g':
                image.src = "images/image7.jpg";
                break;
            case 'A':
                image.src = "images/image8.jpg";
                break;
            case 'a':
                image.src = "images/image9.jpg";
                break;
            case 'B':
                image.src = "images/image10.jpg";
                break;
            case 'b':
                image.src = "images/image11.png";
                break;
           
            default:
                image.src = "images/image2.png"; 
                break;
        }
    
        image.className = "fade-in-out";
        // Append the image to the image container
        imageContainer.appendChild(image);
        // Append the image container to the body
        document.body.appendChild(imageContainer);
        // Set a timeout to translate and fade out the image container
        setTimeout(function () {
            imageContainer.style.transform = "translateY(-50px)";
            imageContainer.style.opacity = 0;
        }, 1000);
    
        setTimeout(function () {
            imageContainer.remove();
        }, 2000);
    }

    // Function to toggle the "pressed" class on a piano key
    function togglePressedState(element) {
        element.classList.toggle("pressed");
    }

    // Function to apply a button animation for the pressed state
    function buttonAnimation(currentKey){ 
        var activeButton=document.querySelector("."+currentKey);
        activeButton.classList.add("pressed"); 
        setTimeout(function(){activeButton.classList.remove("pressed");},150); 
    }








