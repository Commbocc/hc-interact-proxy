interface NavigationRoot {
  Sections: NavigationItem[];
}

interface NavigationItem {
  Url: string;
  TargetType: string;
  Title: string;
  ChildItems: NavigationItem[];
  IsChild: boolean;
  Description: string;
  MenuType: string;
  SectionId: number;
  ModuleId?: any;
}
