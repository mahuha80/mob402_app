import React from 'react';

export default function requireLogin() {
  return (
    <View style={styles.container}>
      <Text>Please login to continue</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
