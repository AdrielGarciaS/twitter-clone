import { FC } from 'react'
import { Button, Input, notification } from 'antd'
import { Tweet } from '@prisma/client'

import { useFeed, useMe } from '@frontend/hooks'
import { api } from '@frontend/services/api'

import { Form } from '@styles/components/CreateTweetForm'
import { useSession } from 'next-auth/client'

interface IFormValues {
  tweet: string
}

const CreateTweetForm: FC = () => {
  const { addItemOnFeed } = useFeed()

  const [form] = Form.useForm()

  const [session] = useSession()

  console.log(session)

  async function handleSubmit(values: IFormValues): Promise<void> {
    const { tweet } = values

    const createdTweet = (await api('tweet', { text: tweet }))?.data as Tweet

    const { email, image, name } = session.user

    const newTweet: ITweet = {
      ...createdTweet,
      author: {
        email,
        image,
        name,
      },
    }

    addItemOnFeed(newTweet)

    notification.success({
      message: 'Tweet cadastrado com sucesso!',
      placement: 'topRight',
    })

    form.resetFields()
  }

  return (
    <Form form={form} onFinish={handleSubmit}>
      {session?.user.name}
      <Form.Item
        name="tweet"
        rules={[
          { required: true, message: 'Campo obrigatório' },
          { whitespace: true, message: 'Campo obrigatório' },
        ]}
      >
        <Input.TextArea rows={5} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          size="large"
          style={{ float: 'right' }}
          htmlType="submit"
        >
          Tweet
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateTweetForm
