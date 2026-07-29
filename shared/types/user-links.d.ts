interface UserLinksResult {
  Items: UserLinkItem[];
  HasResults: boolean;
  Info: UserLinkInfo;
}

interface UserLinkItem {
  Id: number;
  Title: string;
  Description: string;
  Url: string;
  Target: string;
  IsPinned: boolean;
  IsEditable: boolean;
  IsRemoveable: boolean;
  AvailableOnTrustedDevice: boolean;
  AvailableOnDesktop: boolean;
  AvailableOnMobileApplication: boolean;
  AssetId: number;
}

interface UserLinkInfo {
  TotalResults: number;
  Limit: number;
  Offset: number;
}
