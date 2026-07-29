interface InteractSearchResponse {
  SearchTerm: string;
  SearchExecutionTime: number;
  SearchExecutionTimeAsString: string;
  TotalResults: number;
  Results: InteractSearchResult[];
  ContentTypes: InteractSearchResultContentType[];
}

interface InteractSearchResult {
  Id: string;
  AvatarId: number;
  Author?: string;
  AuthorId: number;
  AuthorType: number;
  AuthorTypeTitle?: string;
  TopSectionId: number;
  Title: string;
  Summary?: string;
  JobTitle?: string;
  SearchItemType: string;
  Type: string;
  OriginalTitle: any;
  DateAdded: string;
  DateUpdated?: string;
  Location: string;
  Url: string;
  Target: any;
  Entity: string;
  CommentsAllowed: boolean;
  NoOfComments: number;
  NoOfLikes: number;
  IsBestBet: boolean;
  Attachments: any[];
  IsKey: boolean;
  AvatarPath: any;
  Classification: any;
  IsNew: boolean;
  IsBeta: boolean;
}

interface InteractSearchResultContentType {
  ContentType: string;
  Count: number;
}
