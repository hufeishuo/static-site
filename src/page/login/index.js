require('./index.scss')
require('./another.scss')

import {name, af} from './sub';

import Empty from '@/components/widget/empty/empty.ts'

new Empty(document.body)

console.log(name)

console.log('loaded!!!!!')


console.log(111);

(async ()=>{
    console.log('a');
    let b = await af();
    console.log(`value b is : ${b}`)
    console.log('c')
})()

console.log(GlobalPage)
GlobalPage.render(require('./index.html'))
GlobalPage.setTitle('Good')
