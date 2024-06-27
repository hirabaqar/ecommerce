import { defineField, type SchemaTypeDefinition } from 'sanity';

export const products = {
    name: 'product',
    type: 'document',
    title: 'product',
    fields: [
        {
            name: 'title',
            title: ' Product Title',
            type: 'string'
        },
        {
            name: "descrpition",
            tite: "Product Description",
            type: "string"
        },
        {
            name: "image",
            tite: "Product Image",
            type: "array",
            of: [{
                name: "images",
                tite: " Image",
                type: "image",
            }]
        },
        {
            name: "id",
            tite: "Product id",
            type: "number"
        },
        {
            name: "price",
            tite: "Product Price",
            type: "number"
        },
        {
            name: "quantity",
            tite: "Product Quantity",
            type: "number"
        },
       
       ({
            name: "category",
            tite: "Product Category ",
            type: "reference",
            to: [
                {
                    type: "category"
                },
            ]
        }),
    ]
}



// export const customers={
//     name:"customer",
//     type:"document",
//     title:"customer",
//     field:{
//       name:"Name",
//       title:"Customer Name",
//       type:"string",
//     }
//   }







