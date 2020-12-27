import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { Input, message } from 'antd'
import { mutate } from 'swr'

import { Container, Button, Form } from '@styles/pages/auth'
import { api } from '@frontend/services/api'
import { useMe } from '@frontend/hooks'

interface IAuthForm {
  username: string
  password: string
}

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const { me } = useMe()

  if (me?.username) router.push('feed')

  const [form] = Form.useForm()

  async function handleSubmit(values: IAuthForm): Promise<void> {
    setLoading(true)

    const { username, password } = values

    const url = isLogin ? 'authenticate' : 'user'

    const { data, error } = await api(url, { username, password })

    setLoading(false)

    if (error) {
      message.error(error)
      return
    }

    mutate('me', data)
    message.success('Success!')

    router.push('feed')
  }

  function handleChangeLogin(): void {
    setIsLogin(state => !state)
  }

  return (
    <Container>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Campo obrigatório' },
            { whitespace: true, message: 'Campo obrigatório' },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Campo obrigatório' },
            { whitespace: true, message: 'Campo obrigatório' },
          ]}
        >
          <Input size="large" type="password" />
        </Form.Item>

        <Button htmlType="submit" size="middle" loading={loading}>
          {isLogin ? 'Login' : 'Sign up'}
        </Button>

        <a onClick={handleChangeLogin}>
          {isLogin ? 'New? Sign Up' : 'Already has an user? Log In'}
        </a>
      </Form>
    </Container>
  )
}

export default Auth
