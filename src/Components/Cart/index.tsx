import { useCart } from '../../Providers/Cart'
import {
	Container,
	ProductCard,
	ProductImage,
	PriceHighlight,
	Title,
	Button,
} from './styles'

const Cart = () => {
	const { deleteCart, cart } = useCart()

	return (
		<>
			<Title>Carrinho</Title>
			<Container>
				{cart.map((item: any, index: number) => {
					return (
						<ProductCard key={index}>
							<ProductImage src={item.image} alt={item.title} />
							<p>{item.title}</p>
							<p>{item.description}</p>
							<PriceHighlight>R$ {item.price}</PriceHighlight>
							<Button onClick={() => deleteCart(item)}>
								Remover do carrinho
							</Button>
						</ProductCard>
					)
				})}
			</Container>
		</>
	)
}

export default Cart
