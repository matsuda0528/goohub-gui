import React, { Component } from 'react';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';

class PageOfMakeAction extends Component{
	constructor() {
		super();
		this.state = {
            name: "",
            action_dsl: "",
		};
        this.handleNameChange = this.handleNameChange.bind(this);
		this.handleM = this.handleM.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

    handleNameChange(event){this.setState({name: event.target.value});}
	handleM(event){this.setState({action_dsl: event.target.value});}

    handleNext(){
        this.props.history.push({
            pathname: "/make/outlet",
            state: { f_name: this.props.location.state.f_name,
                     filter_dsl: this.props.location.state.filter_dsl,
                     a_name: this.state.name,
                     action_dsl: this.state.action_dsl
                   }, });}

	render(){
		return(
			<div>
              <Container>
                <h1>Action</h1>
                <h4>編集方法</h4>
                アクション名: <TextBox handleTextChange = {this.handleNameChange}/>
                <br/>
                編集方法: <TextBox handleTextChange = {this.handleM}/>
                <p/>

                <br/>
                フィルタ名: {this.props.location.state.f_name}
                <p/>
                適用条件: {this.props.location.state.filter_dsl}

                <h4>
                  <Link to="/calendar/">
                    <Button>
                      カレンダへ戻る
                    </Button>
                  </Link>&nbsp;

                  <Link to="/make/filter/">
                    <Button>
                      フィルタの作成へ戻る
                    </Button>
                  </Link>&nbsp;

                  <Button onClick={this.handleNext}>
                    共有先の設定へ
                  </Button>
                </h4>
              </Container>
			</div>
		);
	}
}

export default PageOfMakeAction;
