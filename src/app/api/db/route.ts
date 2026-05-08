import prisma from "@/lib/prisma"; //@lib是我在tsconfig.json中配置的别名，表示src目录下的lib文件夹
import {NextRequest, NextResponse} from "next/server"; //引入NextRequest, NextResponse

// 查询所有用户
export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users) //返回用户列表
}

// 创建用户
export async function POST(request: NextRequest) {
    const {name, email, password} = await request.json() //获取请求体
    const user = await prisma.user.create({
        data: {name, email, password}
    })
    return NextResponse.json(user)
}


// 更新用户
export async function PATCH(request: NextRequest) {
    const {id, name, email, password} = await request.json() //获取请求体
    const user = await prisma.user.update({
        where: {id},
        data: {name, email, password}
    })
    return NextResponse.json(user)
}

// 删除用户
export async function DELETE(request: NextRequest) {
    const {id} = await request.json()
    const user = await prisma.user.delete({
        where: {id} //删除用户
    })
    return NextResponse.json(user)
}