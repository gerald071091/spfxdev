declare interface IHelloConsolidatedWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloConsolidatedWebPartStrings' {
  const strings: IHelloConsolidatedWebPartStrings;
  export = strings;
}
