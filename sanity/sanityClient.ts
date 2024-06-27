import { createClient } from "next-sanity";
import { apiVersion,token,dataset,projectId,useCdn}from './env';

export const client = createClient({
    apiVersion:"2024-05-15",
    dataset:"production",
    projectId:'cimzou7g',
    token:process.env.SANITY_ACESS_TOKEN,
    useCdn:true,
})
  await client.fetch("")

// export default createImageBitmap= ({
//     return(urlForImage)

// }
export default myConfiguredSanityClient = (source: Image) => {
  return imageBuilder?.image(source).url()
}

