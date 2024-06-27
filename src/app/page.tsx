import Image from "next/image";
import { LinkHTMLAttributes, Suspense } from "react";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";


async function getproductionData() {

  const fetchData = await client.fetch('*[_type=="product"]{price,_id,title,image,category ->{name}');

  //  && _id =="https://skXkvcYhUdJaQg7qpNReJYmY4rONU4cfxlBJ3Pa87V4xfVXHS33S06BIOdgBtWwlPqLTYS7L7yCETxeZWo7tXMZQrUDgnKN0TtDsJvfzSNoAwa95AV3AT2s6q7rErgXwNH5dAsDq88w9twp5e3RJbrBYD9NobiqJRSpMiw94elIe6te3tLY0"
  // ');

  return fetchData;
}
interface Iprouct {
  title: string,
  _id: string,
  description: string,
  image: IImage,
  price: number
  category: {
    name: string
  }
}

// return fetchData;

export default async function Home() {

  const data: Iprouct[] = await getproductionData();

  return (
    <div className='grid grid-cols-[auto,auto,auto auto] justify-center gap-x-10'>
      {data.map((item)=>(
        <><div>
          <Image src={urlForImage(item.image).url()} alt="product" />
        </div><h1>{item.title}</h1>
        <h3>{item.price}</h3>
        <button className='border py-2 px-6 rounded bg-blue-600 text-white'>Add to Cart</button></>
       
      ))}
    
    </div>
  )
}
      <>
      <div>
  <h1 className="text justify-center text-4xl">Graphic Designer & Learning Typescript, Node.JS, Next.JS & CSS to explore Web 3.0, Gen AI &
    Blockchain Technology</h1>
</div><div className='flex col-2 row-3 m-20 p-5 gap-10'>
    <img src="/pictures/URDU Flyer CANVA COURSE.jpg" alt="my image" width="600" height="800" />
    <img src="/pictures/Untitled (Facebook Post).jpg " alt="poster" width="900" height="800" />
  </div><div className='flex col-2 row-3 m-20 p-5 gap-10'>
    <img src="/pictures/jungle1.jpeg" alt="poster" width="800" height="700" />
    <img src="/pictures/canva new  Flyer.jpg" alt="poster" width="800" height="700" />
  </div><div className='flex col-2 row-3 m-20 p-5 gap-10'>
    <img src="/pictures/magic yt.jpg" alt="poster" width="1000" height="1000" />
    <img src="/pictures/mountain.jpeg " alt="poster" width="750" height="850" />
  </div><div className='flex col-2 row-3 m-20 p-5 gap-10'>
    <img src="/pictures/white & purple scarf.jpg" alt="poster" width="750" height="700" />
    <img src="/pictures/neckscarf.jpg" alt="poster" width="850" height="700" />
  </div>
  </>


 

    {/* 6june work */ }
    {/* <div>
    <Suspense falback={"Loading"}>
      <Users/>
      </Suspense>
      <Suspense fallback={"Loading"}>
        <Blogs/>
        </Suspense>
   </div> */}
    ;



  {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
  function item(_value: Iprouct, _index: number, _array: Iprouct[]): unknown {
    throw new Error("Function not implemented.");
  }

