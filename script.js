let products = document.getElementById("products");
let search = document.getElementById("searchText");
let submit = document.getElementById("submt");
let searchResult = document.getElementById("searchResult");

fetch("https://fakestoreapi.com/products")
  .then((render) => render.json())
  .then((renderedData) => {
    productList(renderedData);
  });

function productList(data) {
  // console.log(data);
  for (let i of data) {
    // console.log(i.title);
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.className = "img";
    img.src = `${i.image}`;
    let detail = document.createElement("p");
    detail.className = "description";
    detail.innerText = `${i.title}`;
    card.appendChild(img);
    card.appendChild(detail);
    products.appendChild(card);
    submit.addEventListener("click", () => {
      let searchText = search.value.trim();
      // console.log(searchText, i);
      if (!i.title.toLowerCase().match(RegExp(searchText.toLowerCase()))) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    });
  }
  // console.log(search);
  // console.log(submit);
  // submit.addEventListener("click",()=>{
  //     let searchText=search.value.trim();
  //     // console.log(searchText);
  //     if(searchText.length!==0){
  //         let search_arr=data.filter((x)=>x.title.toLowerCase().match(RegExp(searchText.toLowerCase())))
  //         // console.log(search_arr);
  //         products.style.display="none";
  //         searchResult.style.display="flex";
  //         for (let i of search_arr){
  //             let card=document.createElement("div");
  //             card.className="card";
  //             let img=document.createElement("img");
  //             img.className="img";
  //             img.src=`${i.image}`
  //             let detail=document.createElement("p");
  //             detail.className="description";
  //             detail.innerText=`${i.title}`;
  //             card.appendChild(img);
  //             card.appendChild(detail);
  //             searchResult.appendChild(card);
  //         }
  //     }
  // })
}
