interface SplashParam {}
interface HomeParam {}
interface loginParam {}
interface registerParam {}
interface AccountParam {}
interface TopUpParam {}
interface PaymentParam {
  value: number;
  services: any;
}

type ParamList = {
  SplashScreen: SplashParam;
  BottomTabNavigator: BottomTabParam;
  HomeScreen: HomeParam;
  LoginScreen: DetailParam;
  RegisterScreen: registerParamParam;
  AccountScreen: AccountParam;
  PaymentScreen: PaymentParam;
  TopUpScreen: TopUpParam;
  TransactionScreen: TransactionParam;
  FrontScreen: FrontScreenParam;
  ResetPasswordScreen: ResetPasswordParam;
};
