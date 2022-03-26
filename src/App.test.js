import { render, screen } from '@testing-library/react';
import App from './App';

// Test case
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Gender and Age from Name/i);
  expect(linkElement).toBeInTheDocument();
});
