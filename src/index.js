import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

let items = [
    {title:'one',body:'message 1'},
    {title:'two',body:'message 2'},
    {title:'three',body:'message 3'},
    {title:'four',body:'message 4'},
]

function toJSX(item){
    return <Item {...item} key={item.title} />
}

const Box = () => {
    let array = []
    items.forEach((item)=> array.push(toJSX(item)))
    return (
        <div className='box'>
            {array}
        </div>
    )
}

const Item = ({title,body}) =>{
    return (
        <div className='item'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

ReactDom.render(<Box/>,document.querySelector('#root'))
