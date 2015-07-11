/**
 * Created by 衍晴 on 2015/7/5.
 */
'use strict';
import React from "react";

import Main from "./Main.js";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
        };
    }

    sendEmail(data){
        //$.ajax({
        //    type: "Get",
        //    url: "/subscribe/"+data,
        //    success: function(result){
        //        alert(result);
        //    }
        //});
        $.ajax({
            type: "Post",
            url: "/subscribe",
            data:{email:data},
            success: function(result){
                alert(result);
            }
        });
    }

    render(){
        return (
            <div className="panel">
            <Main sendEmail={this.sendEmail.bind(this)}/>
            </div>
        )
    }
}
React.render(<App/>, document.getElementById("app"));