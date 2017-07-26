import React from 'react';
import { shallow } from 'enzyme';
import Catalog from './Catalog';
import Product from '../containers/catalog/product';

const mockCatalog = [
  { name: "Product A", price: 249.99, discount: null, img: "img/h38ss-dtbl-sel-201603@2x.png", badge: null },
  { name: "Product B", price: 249.99, discount: null, img: "img/h38ss-dtgr-sel-201603@2x.png", badge: null },
  { name: "Product C", price: 399.99, discount: 25.00, img: "img/s42sg-nsbk-sel-201603@2x.png", badge: "new" }
]

describe('<Catalog />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Catalog catalog={mockCatalog} />);
  });

  test('renders 3 <Product />', () => {
    expect(wrapper.find(Product).length).toEqual(3);
  });

  test('renders <Product /> with the right props', () => {
    const { product, buttonText } = wrapper.find(Product).first().props();

    expect(buttonText).toEqual("Add to cart");
    expect(product).toEqual(mockCatalog[0]);
  });
});
