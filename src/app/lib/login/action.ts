'use server'

import { z } from 'zod';
const loginSchema = z.object(
    {
        username: z.string().min(6, '用户名不能小于6位'),
        password: z.string().min(6, '密码不能小于6位')
    }
)

export async function handleLogin(_prevState: any, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData))
    if (!result.success) {
        const errorMessage = z.treeifyError(result.error).properties;
        let str = ''
        Object.entries(errorMessage!).forEach(([_key, value]) => {
            value.errors.forEach((error: any) => {
                str += error + '\n';
            }
            )
        })
        return { message: str } //返回错误信息
    }
    return { message: '登录成功' }
}