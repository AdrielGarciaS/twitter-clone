import { FC } from 'react'
import { Button, Mentions, Form, notification } from 'antd'
import { useFeed } from '@frontend/hooks'
import { api } from '@frontend/services/api'

interface IFormValues {
  tweet: string
}

const CreateTweetForm: FC = () => {
  const { addItemOnFeed } = useFeed()

  const [form] = Form.useForm()

  async function handleSubmit(values: IFormValues): Promise<void> {
    const { tweet } = values

    const newTweet: ITweet = {
      text: tweet,
      author: { username: 'Adriel' },
    }

    const _tweet = await api('tweet', { text: tweet })

    console.log(_tweet)

    addItemOnFeed(newTweet)

    notification.success({
      message: 'Tweet cadastrado com sucesso!',
      placement: 'topRight',
    })

    form.resetFields()
  }

  return (
    <Form form={form} onFinish={handleSubmit} style={{ marginTop: '2rem' }}>
      <Form.Item
        name="tweet"
        rules={[
          { required: true, message: 'Campo obrigatório' },
          { whitespace: true, message: 'Campo obrigatório' },
        ]}
      >
        <Mentions rows={5} />
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
