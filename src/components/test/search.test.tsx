/**
 * @jest-environment jsdom
 */
import React from 'react';
import { screen } from '@testing-library/react'
import { render } from './test-utils';
import Search from '../Search/index';

// test('плейсхолдер', () => {
//   render(<Search />)
//   const inputElem = screen.getByPlaceholderText(/поиск пиццы/i)
//   expect(inputElem).toBeInTheDocument();
// })

    // Renders a search input field with a placeholder
    it('should render a search input field with a placeholder', () => {
      // Arrange
      render(<Search />);
  
      // Act
      const inputElement = screen.getByPlaceholderText('Поиск пиццы...');
  
      // Assert
      expect(inputElement).toBeInTheDocument();
    });