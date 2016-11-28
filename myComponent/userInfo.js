// import React from "react";
// import {View,Image,Text} from 'react-native';

// import FormatDate from './formatDate';

// // 头像
// function Avatar(props){
// 	return (
// 		<Image source={{uri:props.author.avatarUrl}} style={styles.avataWH} />
// 	);
// }

// // 用户信息
// function UserInfo(props){
// 	console.log(props.author);
// 	return (
// 		<View>
// 			<Avatar author={props.author}/>
// 			<Text>author:{props.author.name}</Text>
// 		</View>
// 	);
// }

// // 评论组件
// function Comment(props){
// 	return (
// 		<View>
// 			<UserInfo author={props.author}/>
// 			<Text>{props.text}</Text>
// 			<Text>{FormatDate(props.date)}</Text>
// 		</View>
// 	);
// }


// const styles = {
// 	avataWH : {
// 		width:100,
// 		height:100
// 	}
// }

// export {UserInfo,Avatar,Comment};


import React , {Component} from "react";
import {View ,Text,Image} from "react-native";

export function UserInfo(props){
	// let avatar = props.author.avatarUrl;
	return (
		<View>
			<Image source={props.author.avatarUrl}/>
			<Text>{props.author.name}</Text>
		</View>
		
		// <Image source={{uri:props.author.avatarUrl}} style={STYLES.avataWH}/>
	);
}

const STYLES = {
	avataWH:{
		width:64,
		height:64
	}
}