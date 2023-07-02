/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import BlogCard from '../components/BlogCard';
import {render, fireEvent} from '@testing-library/react-native'

// có lỗi có thể là do thư viện đó không có tương thích với đúng phiên bản react native
// it('renders correctly', () => {
//   renderer.create(<App />);
// });

describe(BlogCard, ()=>{
  it('should render React Native image', () =>{
    const {getByTestId} = render(<BlogCard />);
    const image = getByTestId('image');
    
    expect(image).toBeTruthy();
  })
})

describe(BlogCard, ()=>{
  it('should render React Native title', () =>{
    const {getByTestId} = render(<BlogCard />);
    const title = getByTestId('title');
    
    expect(title).toBeTruthy();
  })
})
describe(BlogCard, ()=>{
  it('should render React Native title', () =>{
    const {getByTestId} = render(<BlogCard />);
    const subTitle = getByTestId('subTitle');
    
    expect(subTitle).toBeTruthy();
  })
})
describe(BlogCard, () =>{
  it('should render React Native button',
  () =>{
    const {getByTestId} = render(<BlogCard />);
    const button = getByTestId('button')
    fireEvent.press(button)
  })
})





