import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

test('handles click events', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
test('renders button with different types', () => {
  const { rerender } = render(<Button type='submit'>Submit</Button>);
  expect(screen.getByRole('button', { name: /submit/i })).toHaveAttribute(
    'type',
    'submit',
  );

  rerender(<Button type='reset'>Reset</Button>);
  expect(screen.getByRole('button', { name: /reset/i })).toHaveAttribute(
    'type',
    'reset',
  );
});

test('applies custom className', () => {
  render(<Button className='custom-class'>Custom Class</Button>);
  expect(screen.getByText(/custom class/i)).toHaveClass('custom-class');
});
