import React, { Component } from "react";
import { View } from "react-native";

class InvertedBorderView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.customStyles,{width: this.props.width, height: this.props.height}]}>
                <View
                    style={{
                        position:'absolute',
                        left:0,
                        top:0,
                        backgroundColor: this.props.cornerBackgroundColor,
                        height: this.props.cornerRadius,
                        width: this.props.cornerRadius,
                        borderBottomRightRadius: this.props.cornerRadius,
                        zIndex:999
                    }}
                />
                <View
                    style={{
                        position:'absolute',
                        right:0,
                        top:0,
                        backgroundColor: this.props.cornerBackgroundColor,
                        height: this.props.cornerRadius,
                        width: this.props.cornerRadius,
                        borderBottomLeftRadius: this.props.cornerRadius,
                        zIndex:999
                    }}
                />
                <View
                    style={{
                        position:'absolute',
                        right:0,
                        bottom:0,
                        backgroundColor: this.props.cornerBackgroundColor,
                        height: this.props.cornerRadius,
                        width: this.props.cornerRadius,
                        borderTopLeftRadius: this.props.cornerRadius,
                        zIndex:999
                    }}
                />
                <View
                    style={{
                        position:'absolute',
                        left:0,
                        bottom:0,
                        backgroundColor: this.props.cornerBackgroundColor,
                        height: this.props.cornerRadius,
                        width: this.props.cornerRadius,
                        borderTopRightRadius: this.props.cornerRadius,
                        zIndex:999
                    }}
                />
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        padding:this.props.cornerRadius,
                        backgroundColor: this.props.contentBackgroundColor
                    }}>
                    {this.props.contentView ? this.props.contentView : <></>}
                </View>
            </View>
        );
    }
}

module.exports = InvertedBorderView;
