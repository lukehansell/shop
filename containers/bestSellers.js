import ProductList from '../presentation/productList'

export default class extends React.Component {

  static async getInitialProps() {
    return { products: [ 'foo', 'bar', 'baz', 'qux'] }
  }

  render() {
    const { products = ['foo', 'bar', 'baz', 'qux'] } = this.props
    console.log(products)
    return (
      <ProductList header={<h2>Best Sellers</h2>}>
        {products.map(product => <div>{product}</div>)}
      </ProductList>
    )
  }
}
