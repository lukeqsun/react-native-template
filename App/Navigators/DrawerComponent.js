/*
 * Created on Sun May 20 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */
import React from 'react';
import {SafeView, MyStyleSheet} from '../Utilities';
import {ColorConfig} from '../Utilities/Constraints';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-navigation';
import I18n from 'react-native-i18n';

const DrawerComponent = (props) => {
    const {language} = props;
    return (
        <ScrollView>
            <SafeView style={MyStyleSheet.get.container} forceInset={{top: 'always', horizontal: 'never'}}>
                <Text style={MyStyleSheet.get.titleText}>{I18n.t('appName', {locale: language})}</Text>
                <DrawerItems {...props} />
            </SafeView>
        </ScrollView>
    );
};

/**
 * 
 * @param {*} props the props from react-navigation 
 */
const DrawerItems = ({
    language,
    items,
    activeItemKey,
    activeTintColor,
    activeBackgroundColor,
    inactiveTintColor,
    inactiveBackgroundColor,
    getLabel,
    renderIcon,
    onItemPress,
    itemsContainerStyle,
    itemStyle,
    labelStyle,
    activeLabelStyle,
    inactiveLabelStyle,
    iconContainerStyle,
    drawerPosition
}) => {
    return (
        <View style={[MyStyleSheet.get.flex, itemsContainerStyle]}>
            {items.map((route, index) => {
                const focused = activeItemKey === route.key;
                const color = focused ? activeTintColor : inactiveTintColor;
                const backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
                const scene = {route, index, focused, tintColor: color};
                const icon = renderIcon(scene);
                const label = getLabel(scene);
                const extraLabelStyle = focused ? activeLabelStyle : inactiveLabelStyle;
                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => {
                            onItemPress({route, focused});
                        }}
                        delayPressIn={0}>
                        <SafeAreaView
                            style={{backgroundColor}}
                            forceInset={{
                                [drawerPosition]: 'always',
                                [drawerPosition === 'left' ? 'right' : 'left']: 'never',
                                vertical: 'never'
                            }}>
                            <View style={[MyStyleSheet.get.item, itemStyle]}>
                                {icon ? (
                                    <View
                                        style={[
                                            MyStyleSheet.get.icon,
                                            focused ? null : MyStyleSheet.get.inactiveIcon,
                                            iconContainerStyle
                                        ]}>
                                        {icon}
                                    </View>
                                ) : null}
                                {typeof label === 'string' ? (
                                    <Text style={[MyStyleSheet.get.drawerLabel, {color}, labelStyle, extraLabelStyle]}>
                                        {I18n.t(`navigator.${label}`, {locale: language})}
                                    </Text>
                                ) : (
                                    label
                                )}
                            </View>
                        </SafeAreaView>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

DrawerItems.defaultProps = {
    activeTintColor: ColorConfig.PRIMARY,
    activeBackgroundColor: 'rgba(0, 0, 0, .04)',
    inactiveTintColor: 'rgba(0, 0, 0, .87)',
    inactiveBackgroundColor: 'transparent'
};

const mapStateToProps = (state) => {
    return {
        language: state.settings.language
    };
};

export default connect(mapStateToProps)(DrawerComponent);
