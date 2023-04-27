import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaginationItem from './pagination';

describe('PaginationItem', () => {
    it('should render a list of buttons for 5 pages', () => {
        const clickedPageMock = jest.fn();
        const pageSet = 5;
        const { getByText } = render(<PaginationItem pageSet={pageSet} clickedPage={clickedPageMock} />);

        const button1 = getByText('1');
        const button2 = getByText('2');
        const button3 = getByText('3');
        const button4 = getByText('4');
        const button5 = getByText('5');

        expect(button1).toBeVisible();
        expect(button2).toBeVisible();
        expect(button3).toBeVisible();
        expect(button4).toBeVisible();
        expect(button5).toBeVisible();
    });

    it('should render a list of buttons for 10 pages', () => {
        const clickedPageMock = jest.fn();
        const pageSet = 10;
        const { getByText } = render(<PaginationItem pageSet={pageSet} clickedPage={clickedPageMock} />);

        const button1 = getByText('1');
        const button2 = getByText('2');
        const button3 = getByText('3');
        const button4 = getByText('4');
        const button5 = getByText('5');
        const button6 = getByText('6');
        const button7 = getByText('7');
        const button8 = getByText('8');
        const button9 = getByText('9');
        const button10 = getByText('10');

        expect(button1).toBeVisible();
        expect(button2).toBeVisible();
        expect(button3).toBeVisible();
        expect(button4).toBeVisible();
        expect(button5).toBeVisible();
        expect(button6).toBeVisible();
        expect(button7).toBeVisible();
        expect(button8).toBeVisible();
        expect(button9).toBeVisible();
        expect(button10).toBeVisible();
    });

    it('should not render the button if there is only one page', () => {
        const clickedPageMock = jest.fn();
        const pageSet = 1;
        const { queryByText } = render(<PaginationItem pageSet={pageSet} clickedPage={clickedPageMock} />);

        const button1 = queryByText('1');
        expect(button1).toBeNull();
    });
});

