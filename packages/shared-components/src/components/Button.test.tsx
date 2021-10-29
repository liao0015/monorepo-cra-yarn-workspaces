import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
  render(<Button textColor='red'>Button</Button>);
  const linkElement = screen.getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
});
