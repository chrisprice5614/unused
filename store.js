if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    let emptyArray = [""];
    localStorage.setItem("itemArray",JSON.stringify(emptyArray));
    onLoadCartNumbers();
    displayCart();
    
    
    let products = [
        {
            name: 'Silhouette',
            tag: 'Silhouette',
            price: 700,
            inCart: 0
        },
        {
            name: '2012',
            tag: '2012',
            price: 700,
            inCart: 0
        },
        {
            name: 'The Painter',
            tag: 'ThePainter',
            price: 700,
            inCart: 0
        },
        {
            name: 'The Iron Curtain',
            tag: 'TheIronCurtain',
            price: 80,
            inCart: 0
        },
        {
            name: 'Gossamer',
            tag: 'Gossamer',
            price: 80,
            inCart: 0
        },
        {
            name: "Today's Nightmares of Tomorrow's Dreams",
            tag: 'TodaysNightmaresofTomorrowsDreams',
            price: 80,
            inCart: 0
        },
        {
            name: 'A Break From the Normal Cycle',
            tag: 'ABreakFromtheNormalCycle',
            price: 40,
            inCart: 0
        },
        {
            name: 'Isotope',
            tag: 'Isotope',
            price: 45,
            inCart: 0
        },
        {
            name: 'Mi Queso',
            tag: 'MiQueso',
            price: 50,
            inCart: 0
        },
        {
            name: 'Boxed',
            tag: 'Boxed',
            price: 40,
            inCart: 0
        }
    ]

    let deleteMe = document.querySelectorAll('.delme');
    for (let i=0; i<deleteMe.length; i++)
    {
        deleteMe[i].addEventListener('click', () => 
        {
            deleteItem(deleteMe[i],i);
        })
    }

    let carts0 = document.querySelectorAll('.storeMarching2012');
    for (let i=0; i<carts0.length; i++)
    {
        carts0[i].addEventListener('click', () => 
        {
            cartNumbers(products[1]);
        })
    }

    let carts1 = document.querySelectorAll('.storeMarchingSilhouette');
    for (let i=0; i<carts1.length; i++)
    {
        carts1[i].addEventListener('click', () => 
        {
            cartNumbers(products[0]);
        })
    }

    let carts2 = document.querySelectorAll('.storeMarchingPainter');
    for (let i=0; i<carts2.length; i++)
    {
        carts2[i].addEventListener('click', () => 
        {
            cartNumbers(products[2]);
        })
    }

    let carts3 = document.querySelectorAll('.storeConcertCurtain');
    for (let i=0; i<carts3.length; i++)
    {
        carts3[i].addEventListener('click', () => 
        {
            cartNumbers(products[3]);
        })
    }

    let carts4 = document.querySelectorAll('.storeConcertGossamer');
    for (let i=0; i<carts4.length; i++)
    {
        carts4[i].addEventListener('click', () => 
        {
            cartNumbers(products[4]);
        })
    }

    let carts5 = document.querySelectorAll('.storeConcertTodays');
    for (let i=0; i<carts5.length; i++)
    {
        carts5[i].addEventListener('click', () => 
        {
            cartNumbers(products[5]);
        })
    }

    let carts6 = document.querySelectorAll('.storeJazzBreak');
    for (let i=0; i<carts6.length; i++)
    {
        carts6[i].addEventListener('click', () => 
        {
            cartNumbers(products[6]);
        })
    }

    let carts7 = document.querySelectorAll('.storeJazzIsotope');
    for (let i=0; i<carts7.length; i++)
    {
        carts7[i].addEventListener('click', () => 
        {
            cartNumbers(products[7]);
        })
    }

    let carts8 = document.querySelectorAll('.storeJazzQueso');
    for (let i=0; i<carts8.length; i++)
    {
        carts8[i].addEventListener('click', () => 
        {
            cartNumbers(products[8]);
        })
    }

    let carts9 = document.querySelectorAll('.storePercussionBoxed');
    for (let i=0; i<carts9.length; i++)
    {
        carts9[i].addEventListener('click', () => 
        {
            cartNumbers(products[9]);
        })
    }
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.myCart span').textContent = productNumbers;
    }
}

function deleteItem(deleteMe,which)
{
    let thisArray = JSON.parse(localStorage.getItem("itemArray"));
    let cartItems = localStorage.getItem("productsInCart");
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let totalCost = parseInt(localStorage.getItem('totalCost'));
    totalCost = parseInt(totalCost);
    cartItems = JSON.parse(cartItems);
    let tempItem = cartItems[thisArray[which+1]];
    console.log(tempItem);
    totalCost -= parseInt(tempItem.price);


    delete cartItems[thisArray[which+1]]
    productNumbers--;
    let emptyArray = [""];
    localStorage.setItem("itemArray",JSON.stringify(emptyArray));

    localStorage.setItem("productsInCart",JSON.stringify(cartItems));

    
    localStorage.setItem("cartNumbers",productNumbers);
    localStorage.setItem("totalCost",totalCost);
    document.querySelector('.myCart span').textContent = productNumbers;

    displayCart();
    location.reload();

}

function cartNumbers(product) {
    console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    var GoodCheck = true;

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are ", cartItems);

    if(cartItems != null)
    {
        if(cartItems[product.tag] == undefined) {
            GoodCheck = true;
        } 
        else
        {
            cartItems[product.tag].inCart += 1;
            if(cartItems[product.tag].inCart > 1)
            {
                GoodCheck = false;
                var div = document.getElementById('fillMeStore');
                div.innerHTML = 'Item already in cart!';
            }
        }
    }
    if(GoodCheck == true)
    {
        setItems(product);
        totalCost(product);
        if(productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.myCart span').textContent = productNumbers + 1;
        } 
        else 
        {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.myCart span').textContent = 1;
        }
        console.log(productNumbers);
        var div = document.getElementById('fillMeStore');
        div.innerHTML = 'Item added to cart!';
    }
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are ", cartItems);

    if(cartItems != null)
    {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
        if(cartItems[product.tag].inCart > 1)
        {
        }
    }
    else
    {
        product.inCart = 1;
        cartItems = 
        {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product)
{
    //console.log("The product's price is ", product.price);
    let cartCost = localStorage.getItem("totalCost");
    

    if(cartCost != null)
    {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else
    {
        localStorage.setItem("totalCost", product.price);
    }
    cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);
    console.log("Total price is ",cartCost);
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    if(productContainer)
    {
        if(cartItems)
        {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => 
            {
                let thisArray = JSON.parse(localStorage.getItem("itemArray"));
                thisArray.push([item.tag]);
                localStorage.setItem("itemArray",JSON.stringify(thisArray));
                productContainer.innerHTML += 
                `
                <div class="product">
                    <ion-icon name="close-circle-outline" class="delme"></ion-icon>
                    <span>${item.name}</span>
                <div class="product-price"> 
                &nbsp;$${item.price}</div>
                </div>
                `;
            })
        
            productContainer.innerHTML += `
                <div class="basketTotalContainer">
                    <h4 class="basketTotalTitle">
                    <br>
                        Basket Total
                    </h4>
                    <h4 class="basketTotal">
                        $${cartCost}
                    </h4>
                </div>
            `
        }
        else
        {
            productContainer.innerHTML += 
                `
                <div class="product">
                    Your cart is empty
                </div>
                `;
        }

    }
}
