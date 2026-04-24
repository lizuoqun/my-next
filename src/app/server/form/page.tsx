import {Button} from "@/components/ui/button"
import {z} from "zod"

const loginSchema = z.object({
    username: z.string().min(6, '用户名不能少于6位'), //zod基本用法表示这是一个字符串，并且不能少于6位
    password: z.string().min(6, '密码不能少于6位') //zod基本用法表示这是一个字符串，并且不能少于6位
})
export default function Login() {
    async function handleLogin(formData: FormData) {
        'use server'
        const username = formData.get('username') //接受单个参数
        const password = formData.get('password') //接受单个数据
        const form = Object.fromEntries(formData) //接受所有数据 {username: '张三', password: '123456'}
        console.log(username, password, form)

        const result = loginSchema.safeParse(Object.fromEntries(formData)) //调用zod的safeParse方法进行校验

        if (!result.success) {
            const errorMessage = z.treeifyError(result.error).properties; //调用zod的treeifyError方法将错误信息转换为对象
            let str = ''
            Object.entries(errorMessage!).forEach(([_key, value]) => {
                value.errors.forEach((error: any) => {
                    str += error + '\n' //将错误信息拼接成字符串
                })
            })
            console.log('error----', str)
        }
    }

    return (
        <div>
            <h1>登录页面</h1>
            <div className="flex flex-col gap-2 mt-30">
                <form action={handleLogin} className="flex flex-col gap-2">
                    <input className="border border-gray-300 rounded-md p-2" type="text" name="username"
                           placeholder="用户名"/>
                    <input className="border border-gray-300 rounded-md p-2" type="password" name="password"
                           placeholder="密码"/>
                    <Button type="submit">登录</Button>
                </form>
            </div>
        </div>
    )
}