import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export default function Home() {
  return (
    <Button>
      <span>Hello</span>
      world
    </Button>
  )
}
