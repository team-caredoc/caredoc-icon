import React, {useState} from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import Header from './components/Header'
import {IconWrapper} from "./components/IconWrapper";

const Container = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    gap: 16px;
    padding: 0 0 50px 0;
    list-style: none;
`
const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 16px;
    border-radius: 10px;
`
const List = () => {
    const [show,setShow] =useState('')
    const [list, setList] = useState(Object.keys(icons))
    const onChange = (value) => {
        if (!value) {
            setList(Object.keys(icons))
            return
        }
        setList(prev => prev.filter(v => v.includes(value)))
    }
    function handleCopyIcon(str) {
        const el = document.createElement('textarea');
        el.value = `<${str} />`;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setShow(`<${str} /> 복사 완료!`)
        setTimeout(()=>{
            setShow('')
        },3000)
    }
    return (
        <div style={{padding: "32px"}}>
            <Header/>
            <Input placeholder={'Search Icons...'} onChange={e => onChange(e.target.value)}/>
            <Container>
                {
                    list.map((key, index) => {
                        const Icon = icons[key]
                        return (
                            <IconWrapper onClick={() => handleCopyIcon(key)} key={index}>
                                <Icon/>
                                <span style={{background: "none", border: 'none'}}>{key}</span>
                            </IconWrapper>)
                    })
                }
            </Container>
            {show && <div style={{
                fontSize: "32px",
                borderRadius: "999px",
                padding: "30px",
                position: "fixed",
                top: '50px',
                boxShadow: "0 4px 12px #0000001a",
                left: "50%",
                transform: "translateX(-50%)",
                background: "hsl(143, 85%, 96%)",
                color: "hsl(140, 100%, 27%)"
            }}>{show}</div>}
        </div>
    )
}

// copy icon


export default List;
