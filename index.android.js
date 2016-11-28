import React,{Component} from 'react';
import {AppRegistry,View,Text,Image} from 'react-native';

import FormatDate from "./myComponent/formatDate";
import {UserInfo} from "./myComponent/userInfo";
import {Comment} from "./myComponent/comment";

class CommentDemo extends Component{
  render(){
    return (
      <View>
        <UserInfo author={COMMENT_DATA.author}/>
        <Text>{FormatDate(COMMENT_DATA.date)}</Text>
        <Comment author={COMMENT_DATA.author} content={COMMENT_DATA.content} date={COMMENT_DATA.date}/>
      </View>
      // <Comment {...COMMENT_DATA}/> 解构赋值
    );
  }
}

AppRegistry.registerComponent("mainProject002",()=>CommentDemo);

// 定义常量用大写字母加下划线
const COMMENT_DATA = {
  date:new Date(),
  content:"My First react-native demo content!",
  author:{
    name:"pp",
    avatarUrl:require('./img/logo.png'),
    // avatarUrl:"http://placekitten.com/g/64/64"
  }
}



