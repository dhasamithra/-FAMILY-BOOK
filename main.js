
    var images=[
    "C:\Users\Dhana\Downloads",
    "C:\Users\Dhana\Downloads",
    "C:\Users\Dhana\Downloads"
    ];
    var i=0;
    function nextslide(){
    document.getElementById("reasontext").innerHtml = reasons[i];
    document.getElementById("album").innerHtml = images[i];
    i++;}
    
    