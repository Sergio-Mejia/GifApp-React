import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con GetGifs.js Fetch', () => { 

    test('debe de traer 10 elementos', async() => { 

        const gifs = await getGifs('PeaceMaker');
        expect(gifs.length).toBe(10);

    });
    
    
    test('debe de traer 0 elementos', async() => { 

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });





})