declare interface IHelloNoFrameworkWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloNoFrameworkWebPartStrings' {
  const strings: IHelloNoFrameworkWebPartStrings;
  export = strings;
}
