import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import {css} from './utils'


export const  model = [
    new TitleBlock('JavaScript site constructor', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
        })
    }),    
    new ImageBlock(image, {
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;',
        styles: css({
            padding: ' 2rem 0',
            display: 'flex',
            'justify-content': 'center',
        })
    }),
    new TextBlock(`Constructor was made by Vitalii Kutsuruk &copy;`, {
        styles: css({
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            'font-weight': 'bold',
            padding: '1rem',
        })
    }),
    new TextColumnsBlock([
        'JavaScript - it`s easy!',
        'Made site without any libraries!',
        'Lets start your own deal!',
    ], {
        styles: css({
            padding: '2rem 0',
            color: '#fff',
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            'font-weight': 'bold',
        })
    }),
]