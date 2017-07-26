import React from 'react';
import { shallow } from 'enzyme';
import CartProduct from './CartProduct';
import Price from './Price';

const mockRemoveFromCart = jest.fn();

describe('<CartProduct />', () => {
  let wrapper;

  beforeAll(() => {
    const mockProduct = { name: "Product A", price: 249.99, discount: null, img: "img/h38ss-dtbl-sel-201603@2x.png", badge: "sale" };
    wrapper = shallow(<CartProduct product={mockProduct} id={1} removeFromCart={mockRemoveFromCart} />);
  });

  test('renders the right elements', () => {
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find(Price).length).toEqual(1);
    expect(wrapper.find('a').length).toEqual(1);
  });

  test('simulate click events', () => {
    wrapper.find('a').simulate('click');
    expect(mockRemoveFromCart.mock.calls.length).toEqual(1);
  });

  describe('when product has discount', () => {
    beforeAll(() => {
      const mockProduct = { name: "Product A", price: 249.99, discount: 50.0, img: "img/h38ss-dtbl-sel-201603@2x.png", badge: "sale" };
      wrapper = shallow(<CartProduct product={mockProduct} id={1} removeFromCart={mockRemoveFromCart} />);
    });

    test('renders 2 <Price />', () => {
      expect(wrapper.find(Price).length).toEqual(2);
    });
  });
});
