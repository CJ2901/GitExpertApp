

import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en GifItem', () => { 
    
    const title = 'Spiderman';
    const url = 'https://spider-man.com/spidery.jpg'
    const id = "SlkjLyujkgYU";

    test('debe mostrar match con el snapshot', () => { 
        /*
            1. Añadir PropTypes ??? yarn add prop-types
                a. title Obligatorio
                b. url Obligatorio 
            
            2. Evaluar Snapshot
        */
        const {container} = render(<GifItem title={title} url={url} id={id} />)
        expect(container).toMatchSnapshot()
    });
    
    test('should mostrar la imagen con el URL y ALT indicado', () => { 
        render(<GifItem title={title} url={url} id={id} />);

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

     });

     test('should mostrar el título en el componente', () => { 
        render(<GifItem title={title} url={url} id={id} />);
        expect( screen.getByText(title) ).toBeTruthy();
        
      });

 })