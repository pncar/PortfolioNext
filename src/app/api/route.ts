import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


const GET = async(request: NextRequest, {params}: {params: Promise<{ search: string}>}) => {
    console.log(request,params);
    return NextResponse.json({message: `Testing imp.`});
}

export { GET }