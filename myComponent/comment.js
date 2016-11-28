import React , {Component} from "react";
import {View ,Text } from 'react-native';

import FormatDate from "./formatDate";
import {UserInfo} from "./userInfo";

function Comment(props){
	return (
		<View>
			<UserInfo author={props.author}/>
			<Text>{props.content}</Text>
			<Text>{FormatDate(props.date)}</Text>
		</View>
	);
}

export {Comment};


