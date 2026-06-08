import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    //接受url中的参数
    const query = request.nextUrl.searchParams;
    console.log('id = ' + query.get('id'));
    console.log('name = ' + query.get('name'));

    //返回json数据    
    return NextResponse.json({ message: 'Get request successful' });
}

export async function POST(request: NextRequest) {
    //接受url中的参数
    const body = request.arrayBuffer;
    console.log('body = ' + body);
    //返回json数据    
    return NextResponse.json({ message: 'Post 请求' }, { status: 201 });
}