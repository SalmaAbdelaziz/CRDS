
var productContainer;


var btn = document.getElementById("my-btn");

if(localStorage.getItem("productsData")==null)
{
    productContainer=[];
}
else
{
    productContainer=JSON.parse( localStorage.getItem("productsData"));
    displayProduct();
}

function validateForm(userName)
{
    var userNameRegex=/^[A-Z][a-z]{3,8}/;
    if(userNameRegex.test(userName)==false)
    {
        return false;
    }else{
        return true;
    }
}


function AddProduct(){
  var productName=document.getElementById("ProductNameInp").value;
  var productPrice=document.getElementById("ProductPriceInp").value;
  var productCategory=document.getElementById("ProductCategoryInp").value;
  var productDesc=document.getElementById("ProductDescInp").value;
   if(validateForm(productName)==true ){
    var product=
    {
        name:productName,
        price:productPrice,
        category:productCategory,
        desc:productDesc
    }
    productContainer.push(product);
    localStorage.setItem("productsData" ,JSON.stringify(productContainer));
    
  displayProduct();
}
else
{
    window.alert("User name not valid");
    
  
}}

function displayProduct()
{
    var temp="";
    for(var i=0;i<productContainer.length;i++)
    {
        temp+=`<div class="col-md-3 ">
        <div class="product mb-4">
            <img src="images/work-6.jpg" class="img-fluid" alt="">
            <h4>`+productContainer[i].name+` <span class="ml-5 badge badge-primary">`+productContainer[i].category+`</span></h4>
            <p> `+productContainer[i].desc+`</p>
                <div class="price">`+productContainer[i].price+`</div>

                <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">Delete</button>
             
        </div>
    </div>`
    }
    document.getElementById("productsRow").innerHTML=temp;
}

function searchProducts(term)
{
var temp=``;
    for(var i=0; i<productContainer.length; i++)
    {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            temp+=`<div class="col-md-3">
            <div class="product">
                <img src="images/work-6.jpg" class="img-fluid" alt="">
                <h4>`+productContainer[i].name+` <span class="ml-5 badge badge-primary">`+productContainer[i].category+`</span></h4>
                <p> `+productContainer[i].desc+`</p>
                    <div class="price">`+productContainer[i].price+`</div>
            </div>
        </div>`
        }
    }
    document.getElementById("productsRow").innerHTML=temp;
}

function deleteProduct(indx)
{
    var deleted=productContainer.splice(indx,1);
    localStorage.setItem("productsData" ,JSON.stringify(productContainer));
    displayProduct();
} 


function clear() {
    var inpss = document.getElementsByClassName("form-control");
    for (var i = 0; i < inpss.length; i++) {
        inpss[i].value = "";

    }
    
}

