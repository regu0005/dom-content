
import info from './data.js';

let main = document.querySelector('main');
let df = document.createDocumentFragment();

info.forEach((elementObj)=>{

    let elem = document.createElement(elementObj.tag);
    elem.textContent = elementObj.content;

    console.log('Tag: '+elementObj.tag);
    console.log('Content: '+elem.textContent);

    if('children' in elementObj){
        
        elementObj.children.forEach(child=>{

            let el = document.createElement(child.tag);
            
            if(child.tag == 'img'){
                el.setAttribute('src',child.src);
                el.setAttribute('alt',child.content);
                el.classList.add('style_img');
            }
            else
            {
                el.textContent = child.content;
            }
            
            elem.append(el);
        })
    }

    console.log('Elem tag: ' + elementObj.tag);

    switch(elementObj.tag)
            {
                case 'h3':
                    elem.classList.add('style_h3');
                break;
                case 'p':
                    elem.classList.add('style_p');
                break;
                default:
                    // NO DEFAULT STYLE 
            }

   df.append(elem); 

})

main.append(df);