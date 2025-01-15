import ProductCategoryRow from '../Product/ProductCategoryRow.jsx';
import ProductRow from '../Product/ProductRow.jsx'

// eslint-disable-next-line react/prop-types
const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  // eslint-disable-next-line react/prop-types
  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        // eslint-disable-next-line react/prop-types
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;