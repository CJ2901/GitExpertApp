import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas en AddCategory', () => {

    test('should cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        const hero = 'Spider-Man';

        fireEvent.input(input, { target: { value: hero } });
        expect(input.value).toBe(hero);

    });

    test('should llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Spider-Man';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no should llamar el onNewCategory si el input está vacío', () => { 
        
        // // const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        // // const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');     

        // // fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        // // expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();


     })


})