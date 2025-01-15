// eslint-disable-next-line react/prop-types
const ProductRow = ({product}) => {
    // eslint-disable-next-line react/prop-types
    const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {/* eslint-disable-next-line react/prop-types */}
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;