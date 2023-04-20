//alert("working")

const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    console.log(searchbox)
    const storeitems = document.getElementById("product-list")
    const product = storeitems.querySelectorAll(".container")
    console.log(product)
    const names = storeitems.getElementsByClassName("name")
    console.log(names)
    for(var i=0; i<names.length; i++){
        let match = product[i].querySelector(".name")
        if(match){
            let txtval = match.textContent
            if(txtval.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display=""
                console.log(match)
            }
            else{
                product[i].style.display="none"
            }
    }
    }
}