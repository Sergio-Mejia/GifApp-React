import React from 'react';
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifgridItem';



describe('pruebas en GifGridItem', () => { 

    const title = 'Un titulo';
    const  url = 'https://localhost/some.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('Debe mostrar el componente correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe(title);

    });


    test('debe tener la imagen igual a la url y alt de los props', () => { 

        const img = wrapper.find('img');
        // console.log(img.props('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.props().alt).toBe(title);
    })

    
    test('debe tener animate__FadeInUp', () => { 

        const div = wrapper.find('div');
        const className = div.props().className;

        expect(className.includes('animate__fadeInUp')).toBe(true);
    })
})