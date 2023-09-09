import {ToastShowParams} from 'react-native-toast-message';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

export const convertToRupiah = (val: number) => {
  const newVal = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(val);

  return newVal;
};

export const showErrorToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'error',
    text1: message || 'Terjadi Kesalahan',
  });
};

export const showSuccessToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'success',
    text1: message,
  });
};

export const getBackgroundColor = (alphaIndex: number) => {
  switch (alphaIndex % 6) {
    case 0:
      return '#ffaaaa';
    case 1:
      return '#aaffaa';
    case 2:
      return '#aaaaff';
    case 3:
      return '#ffffaa';
    case 4:
      return '#ffaaff';
    case 5:
      return '#aaffff';
    default:
      return '#aaaaaa';
  }
};
