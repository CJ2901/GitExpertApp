import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Spider-man PS4');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim());
    }

    return (
        <>
            {/* Es lo mismo que onSubmit={(event) => onSubmit(event)} */}
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}
