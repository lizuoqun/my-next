import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const id = query.get('id');
  return NextResponse.json({message: `Get request successful! id = ${id}`});
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // const body = await request.formData();
  // const body = await request.text();
  // const body = await request.blob();
  // const body = await request.arrayBuffer();
  return NextResponse.json({message: `Post request successful! id = ${body}`});
}
