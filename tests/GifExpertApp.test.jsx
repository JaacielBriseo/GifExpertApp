const { render, screen } = require("@testing-library/react")
import {GifExpertApp} from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp/>', () => { 
    test('Debe de tener "Marvel como primer subtitulo"',()=>{
        render( <GifExpertApp/>)
        expect(screen.getByText('Marvel'))
        //screen.debug()
    })   
     test('Debe de tener "GifExpertApp" como primer titulo"',()=>{
        render( <GifExpertApp/>)
        expect(screen.getByText('GifExpertApp'))
       // screen.debug()
    })
 })