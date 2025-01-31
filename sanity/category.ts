import { defineType, defineField } from "sanity"

export const category = defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
    
        defineField({
            name: "name",
            title: "Category Name",
            type: "string",
            options:{
                list:["Design by Me","Create by Me","Generate by Meta"]
            }
        }),
    ]
})
