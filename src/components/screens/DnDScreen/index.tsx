import {StyleSheet, ImageBackground, View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {Header, MainText, MainView} from '@components/atoms';
import {useDnDScreen} from './useDnDScreen';
import {Kapal} from '@assets/images';
import {DraxProvider, DraxView, DraxList} from 'react-native-drax';
import {generalStyles} from '@constants/styles';
import Colors from '@constants/colors';
import {getBackgroundColor} from '@constants/functional';

type Props = {
  index: number;
  text: string;
};

const DraggableItem: FC<Props> = props => (
  <View key={props?.index} style={styles.draggableItemsData}>
    <MainText fontSize={8} lineHeight={12}>
      {props?.text}
    </MainText>
  </View>
);

const DraggableItem2: FC<Props> = props => (
  <View
    key={props?.index}
    style={[
      styles.draggableItemsContainer,
      {backgroundColor: getBackgroundColor(props?.index)},
    ]}>
    <MainText fontSize={8} lineHeight={12}>
      {props?.text}
    </MainText>
  </View>
);

const DnDScreen = () => {
  const {isReordering, setIsReordering, containerArray, items, setItems} =
    useDnDScreen();

  const _renderCardDraggable = () => (
    <View style={styles.container}>
      <DraxList
        nestedScrollEnabled
        data={items}
        style={[
          generalStyles.card,
          generalStyles.shadowProp,
          {marginHorizontal: 10},
        ]}
        contentContainerStyle={styles.cardContainer}
        renderItemContent={({item, index}) => (
          <DraggableItem key={index} index={index} text={item.text} />
        )}
        onItemReorder={({fromIndex, toIndex}) => {
          const newData = items.slice();
          newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
          setItems(newData);
        }}
        onItemDragStart={() => {
          setIsReordering(true);
        }}
        onItemDragEnd={() => {
          setIsReordering(false);
        }}
        keyExtractor={item => item?.text}
      />
    </View>
  );

  return (
    <MainView flex={1}>
      <Header label="Drag & Drop" withoutBackButton />
      <MainView padding={16} flex={1}>
        <ScrollView
          contentContainerStyle={[generalStyles.contentContainerStyle]}>
          <DraxProvider>
            <ImageBackground source={Kapal} style={styles.kapal}>
              {containerArray?.map((obj: any) => (
                <View style={obj?.style}>
                  <DraxView
                    style={styles.receiver}
                    onReceiveDragDrop={({dragged: {payload}}) => {
                      if (isReordering) {
                        const updatedContainer = items[payload.index];
                        obj?.setItems((prev: any) => {
                          if (prev?.length !== 0) {
                            return [...prev, updatedContainer];
                          }
                          return [updatedContainer];
                        });

                        const updatedItems = items.filter(
                          (_, index) => index !== payload.index,
                        );
                        setItems(updatedItems);
                      }
                    }}>
                    <DraxList
                      nestedScrollEnabled
                      data={obj?.items}
                      horizontal
                      renderItemContent={({item, index}: any) => (
                        <DraggableItem2
                          key={index}
                          index={index}
                          text={item.text}
                        />
                      )}
                      onItemDragStart={() => {
                        setIsReordering(false);
                      }}
                      onItemReorder={({fromIndex, toIndex}) => {
                        setIsReordering(false);
                        const newData = obj?.items?.slice();
                        newData.splice(
                          toIndex,
                          0,
                          newData.splice(fromIndex, 1)[0],
                        );
                        obj?.setItems(newData);
                      }}
                      keyExtractor={(item: {text: string}) => item?.text}
                    />
                  </DraxView>
                </View>
              ))}
            </ImageBackground>
            {items?.length !== 0 ? _renderCardDraggable() : null}
          </DraxProvider>
        </ScrollView>
      </MainView>
    </MainView>
  );
};

export {DnDScreen};

export const styles = StyleSheet.create({
  kapal: {
    width: '100%',
    height: 120,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  draggable: {
    width: 16,
    height: 16,
    backgroundColor: 'green',
  },
  receiver: {
    height: 16,
    backgroundColor: 'lightblue',
  },
  receiver1: {
    width: '75%',
    height: 16,
    marginTop: 16,
    marginLeft: 48,
  },
  receiver2: {
    width: '82%',
    marginTop: 2,
    height: 16,
    marginLeft: 32,
  },
  receiver3: {
    width: '85%',
    marginTop: 2,
    height: 16,
    marginLeft: 24,
  },
  receiver4: {
    width: '82%',
    marginTop: 2,
    height: 16,
    marginLeft: 32,
  },
  receiver5: {
    width: '75%',
    height: 16,
    marginTop: 2,
    marginLeft: 48,
  },
  draggableItemsData: {
    backgroundColor: Colors.success.base,
    padding: 8,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  draggableItemsContainer: {
    paddingHorizontal: 4,
    paddingVertical: 1,
    height: 20,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
