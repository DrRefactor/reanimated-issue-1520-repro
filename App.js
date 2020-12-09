import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  useValue,
} from "react-native-reanimated";
import { View, Button, Text } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";

const elements = new Array(500).fill(null);
const RIGHT = 39;
function useRightKeyListener(handler) {
  useEffect(() => {
    const listener = (event) => {
      if (event.keyCode === RIGHT) {
        event.preventDefault();
        handler();
      }
    }
  
    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, []);
}

const elementSize = 250;

export default function AnimatedStyleUpdateExample(props) {
  const focusedIndexSync = useRef(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const focusPositionAnimated = useValue(0);

  useRightKeyListener(useCallback(() => {
    focusedIndexSync.current++;

    focusPositionAnimated.setValue(-focusedIndexSync.current * elementSize);
    setFocusedIndex(focusedIndexSync.current);
  }));

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        transform: [
          {translateX: focusPositionAnimated}
        ],
        marginLeft: 50
      }}
    >
      {
        elements.map((_, i) => (
          <Animated.View
            style={{
              height: elementSize,
              width: elementSize,
              backgroundColor: i === focusedIndex ? 'blue' : 'red',
              borderRadius: elementSize / 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{fontSize: 32, color: 'white'}}>{i}</Text>
          </Animated.View>
        ))
      }
    </Animated.View>
  );
}
