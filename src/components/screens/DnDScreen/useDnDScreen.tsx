import {useEffect, useState} from 'react';
import {styles} from '.';
import Orientation from 'react-native-orientation-locker';
import {useIsFocused} from '@react-navigation/native';
const useDnDScreen = () => {
  const [isReordering, setIsReordering] = useState(false);
  const isFocused = useIsFocused();
  const [items, setItems] = useState([
    {text: 'B2222IKN'},
    {text: 'A3590LMN'},
    {text: 'C5543KKP'},
    {text: 'A5555KYT'},
    {text: 'B247882930PPP'},
    {text: 'B3374892KH'},
    {text: 'K738971843789KH'},
    {text: 'R3852123LL'},
  ]);

  const [container1, setContainer1] = useState<any>([]);
  const [container2, setContainer2] = useState<any>([]);
  const [container3, setContainer3] = useState<any>([]);
  const [container4, setContainer4] = useState<any>([]);
  const [container5, setContainer5] = useState<any>([]);

  const containerArray = [
    {
      items: container1,
      setItems: setContainer1,
      style: styles.receiver1,
    },
    {
      items: container2,
      setItems: setContainer2,
      style: styles.receiver2,
    },
    {
      items: container3,
      setItems: setContainer3,
      style: styles.receiver3,
    },
    {
      items: container4,
      setItems: setContainer4,
      style: styles.receiver4,
    },
    {
      items: container5,
      setItems: setContainer5,
      style: styles.receiver5,
    },
  ];

  useEffect(() => {
    if (isFocused) {
      Orientation.lockToLandscape();
    }
    return () => {
      Orientation.lockToPortrait();
    };
  }, [isFocused]);

  return {
    isReordering,
    setIsReordering,
    containerArray,
    items,
    setItems,
  };
};

export {useDnDScreen};
