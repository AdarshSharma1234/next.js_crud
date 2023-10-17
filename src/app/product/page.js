
async function productList(){
    let data= await fetch("https://dummyjson.com/products")
    data= await data.json();
    return data.products
}


export default async function product(){
    const products=await productList()
    console.log("=====>>>",products)
    
    return(
        <div>
             <h1>fetch products</h1>
             {
               products.map((item)=>{
                <div><h4>Name:{item.price}</h4>
                </div>
              
               })
             }
        </div>
    )
}