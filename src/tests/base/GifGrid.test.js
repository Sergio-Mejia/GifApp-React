import React from 'react';
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifgridItem';



describe('pruebas en GifGridItem', () => { 

    const title = 'Un titulo';
    const  url = 'https://localhost/some.jpg';
    
    test('Debe mostrar el componente correctamente', () => { 

        const wrapper = shallow(<GifGridItem/>);

        expect(wrapper).toMatchSnapshot();
    });

})