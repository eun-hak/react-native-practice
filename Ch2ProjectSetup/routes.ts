export const RouteNames = {
  HOME: 'home' as const,
  SHOPPING: 'shopping' as const,
  HOME_TAB: 'home_tab' as const,
  BROWSER: 'browser' as const,
};

export type RootStackParamList = {
  [RouteNames.HOME_TAB]: undefined;
  [RouteNames.BROWSER]: undefined;
};
