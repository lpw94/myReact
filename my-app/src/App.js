import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isKing : true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      isKing : !this.state.isKing
    })
  }
  // 绑定的时候传递箭头函数
  handleClick1(){
    this.handleClick()
  }
  // 定义的时候是剪头函数
  handleClick2 = ()=>{
    this.handleClick()
  }
  // onClick 的时候直接绑定
  handleClick3(){
    this.handleClick()
  }
  render() {
    const level = '最强王者'
    const isKing = false

    //const title = isKing?<p>早睡早起，理性游戏</p>:<h2>我们的目标是 {{level}}</h2>
    const title = this.state.isKing
                    ? <p>早睡早起，理性游戏</p>
                    : <h2>我们的目标是{level}</h2>

    const wordList = ['俺老孙来也','有妖气','取经之路，就在脚下azfd']
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
        <button onClick={()=>this.handleClick1()}>点我1</button>
        <button onClick={this.handleClick2}>点我2</button>
        <button onClick={this.handleClick3.bind(this)}>点我3</button>


        {title}
        {this.state.isKing ? <p>我就是王者</p>: <p>我就是怂逼</p>}
        
        <Tank name='程咬金'></Tank> 
      </div>
    )
  }
}

class Tank extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.name}是一个坦克</h3>
      </div>
    )
  }
}

export default App;