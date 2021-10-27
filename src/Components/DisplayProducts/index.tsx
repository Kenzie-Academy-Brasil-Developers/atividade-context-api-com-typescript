import { useCart } from '../../Providers/Cart'
import {
	Container,
	ProductCard,
	ProductImage,
	PriceHighlight,
	Title,
	Button,
} from './styles'

const DisplayProducts = ({ products }: any) => {
	const { addToCart } = useCart()

	return (
		<>
			<Title>Produtos</Title>
			<Container>
				{products.map((item: any) => {
					return (
						<ProductCard key={item.id}>
							<ProductImage src={item.image} alt={item.title} />
							<p>{item.title}</p>
							<p>{item.description}</p>
							<PriceHighlight>R$ {item.price}</PriceHighlight>
							<Button onClick={() => addToCart(item)}>
								Adicionar ao Carrinho
							</Button>
						</ProductCard>
					)
				})}
			</Container>
		</>
	)
}

export default DisplayProducts
