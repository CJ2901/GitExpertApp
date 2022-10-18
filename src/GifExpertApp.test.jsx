import { render } from "@testing-library/react"
import { GifExpertApp } from "./GifExpertApp"

describe('pruebas en GifExpertApp', () => { 
    
    test('should mostrar match con el snapshot', () => { 
        const {container} = render( <GifExpertApp/> );
        expect(container).toMatchSnapshot();
     })

 })