// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AuthBridge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AuthBridge/i);
    expect(titleElement).toBeInTheDocument();
});
