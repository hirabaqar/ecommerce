import {NextRequest,NextResponse} from 'next/server';
// import {sql} from '@/vercel/postgress';

export const GET =(req:NextRequest)=>{
    const {rows}=  sql `select * FROM "order"`
    return NextResponse.json(rows)

    return(NextRequest)
}


const data = await sql `select * From "order"`
// return 
NextResponse.json (data)
