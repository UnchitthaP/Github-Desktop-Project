import React from 'react';
import { userContext } from './context'

export default class Header2 extends React.Component{
    static contextType = userContext

    render(){
        let[user,setUser] = this.context

        const headerStyle = {
            backgroundColor:'#cee',
            textAlign:'center',
            padding: 5
        }

        const onClickSignout = (event) => {
            event.preventDefault()
            setUser('')
        }

        const onClickSignin = (event) => {
            event.preventDefault()
            setUser('Albaz')
        }

        return(
            <div style={headerStyle}>
                <a href="">Home</a>&nbsp;-&nbsp;
                <a href="">Product</a>&nbsp;-&nbsp;
                <a href="">Contact</a>&nbsp;-&nbsp;&nbsp;
                {
                    (user) //ถ้ามี user มา ให้ Signout ถ้าไม่ ขึ้น Signin แทน
                    ?<span>[{user}&nbsp;:&nbsp;<a href=""
                        onClick={onClickSignout}>Signout</a>]</span>
                    :<span>[<a href="" onClick={onClickSignin}>Signin</a>]</span>
                }
            </div>
        )

    }
}