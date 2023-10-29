// fetch product data from api

fetch('https://jsonplaceholder.typicode.com/posts')
.then(Response => Response.json())
.then(data => {
    diplayProductData(data);
}).catch(error => console.error(error));

//function to display product data on the web page

function diplayProductData(product){
    const productContainer = document.getElementById('product-container');

    product.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
            <tr border = "1px">
                 <td>${product.id}</td>
                 <td>${product.title}</td>
                 <td>${product.body}</td>
            </tr>
            `;
            productContainer.appendChild(productCard);
    });
}
