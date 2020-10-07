//Collect json 
fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
  .then(response => response.json())
  .then(data => {
    let i1
    for(i1=0; i1<=data.data.length; i1++){
        //vars
        let para = document.createElement("p");

        //title
        var node = document.createTextNode(data.data[i1].name);
        para.appendChild(node)
        document.body.appendChild(para);

        //img
        let img = document.createElement("IMG");
        img.setAttribute("src", data.data[i1].card_images[0].image_url_small);
        document.body.appendChild(img);
    //end
    }
   
});
console.log("Done with all the pictures")

//name
//data.data[0].name

//image
//data.data[0].card_images[0].image_url_small

