import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function SettingsScreen() {
  return (
    <View>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="md-home"
        label="Ajout un Logement"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Ajouter une activité"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="md-car"
        label="Ajouté un transport"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
      <OptionButton
        icon="md-business"
        label="Devenir Partenaire"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
      <OptionButton
      icon=""
      label=""
      onPress={() => null}
    />
  <OptionButton
      icon="md-school"
      label="Profile"
      onPress={() => (WebBrowser.openBrowserAsync('https://docs.expo.io'))}
    />

    <OptionButton
      icon="Security"
      label="Read the React Navigation documentation"
      onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
    />

    <OptionButton
      icon="ios-chatboxes"
      label="Ask a question on the forums"
      onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
      isLastOption
    />
    <OptionButton
      icon="ios-chatboxes"
      label="Ask a question on the forums"
      onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
      isLastOption
    />
    </ScrollView>
    
  </View>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
