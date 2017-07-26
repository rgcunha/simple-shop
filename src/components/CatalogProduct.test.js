import React from 'react';
import { shallow } from 'enzyme';
import CatalogProduct from './CatalogProduct';
import Button from './Button';
import Badge from './Badge';
import Price from './Price';

const mockAddToCart = () => jest.fn();

describe('<CatalogProduct />', () => {
  let wrapper;

  beforeAll(() => {
    const mockProduct = { name: "Product A", price: 249.99, discount: null, img: "img/h38ss-dtbl-sel-201603@2x.png", badge: "sale" };
    wrapper = shallow(<CatalogProduct product={mockProduct} addToCart={mockAddToCart} />);
  });

  test('renders the right elements', () => {
    expect(wrapper.find(Badge).length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find(Price).length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
  });

  describe('when product has discount', () => {
    beforeAll(() => {
      const mockProduct = { name: "Product A", price: 249.99, discount: 50.0, img: "img/h38ss-dtbl-sel-201603@2x.png", badge: "sale" };
      wrapper = shallow(<CatalogProduct product={mockProduct} addToCart={mockAddToCart} />);
    });

    test('renders 2 <Price />', () => {
      expect(wrapper.find(Price).length).toEqual(2);
    });
  });
});
