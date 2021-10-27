import styled from 'styled-components'

export const Title = styled.h1`
	background-color: white;
	margin-top: 20px;
	height: 65px;
`

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

export const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	border-radius: 5%;
	width: 220px;
	height: 450px;
	margin-left: 20px;
	margin-top: 20px;
	padding: 10px 25px;

	p {
		font-weight: bold;
	}
`
export const ProductImage = styled.img`
	max-width: 150px;
	height: 150px;
`

export const PriceHighlight = styled.p`
	font-weight: bold;
	color: #d6c506;
`

export const Button = styled.button`
	padding: 10px 20px;
	background-color: #d6c506;
	color: #f3f3f3;
	border-radius: 16px;
	border: none;
	cursor: pointer;
`
