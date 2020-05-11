export const allproductsAvailable = (products, description_length, opt = true) => {
    let allProducts = [];
    if (opt) {
        products.forEach(product => {
            const productDescription = description_length >= product.
            description.length ? product.description : `${product.
            description.slice(0, description_length)}`
            allProducts.push({
                ...product.dataValues,
                description: productDescription
            });
        })
        console.log(allProducts)
        return allProducts;
    }
    if (opt === false) {
        products.forEach(product => {
            const productDescription = description_length >= product.product.description.length ? product.product.description : `${
            product.product.description.slice(0, description_length)
        }`
            allProducts.push({
                ...product.product.dataValues,
                description: productDescription
            })
        })
        return allProducts;
    }
    products.forEach(singleProduct => {
        const productDescription = description_length >= singleProduct.description.length ? singleProduct.description : `${singleProduct.description.slice(0, description_length)}`
        allProducts.push({
            ...singleProduct.dataValues,
            description: productDescription
        })
    })
    return allItems(allProducts)
};

const allItems = array => {
    const all = [];
    array.forEach(product => {
        all.push(product)
    })
}

export const productResult = (products) => {
    const all = [];
    products.forEach(product => {
        all.push({
            product_id: product.product_id,
            name: product.name,
            description: product.description,
            price: product.price,
            discounted_price: product.discounted_price,
            thumbnail: product.thumbnail
        })
    })
    return all
}

export const filterProductsCategories = ({
    category_id,
    category,
    category: {
        department_id,
        department: {
            name
        }
    }
}) => {
    return {
        category_id,
        category_name: category.name,
        department_id,
        department_name: name
    };
};