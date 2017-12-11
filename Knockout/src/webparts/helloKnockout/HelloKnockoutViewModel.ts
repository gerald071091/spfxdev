import * as ko from 'knockout';
import styles from './HelloKnockout.module.scss';
import { IHelloKnockoutWebPartProps } from './HelloKnockoutWebPart';

export interface IHelloKnockoutBindingContext extends IHelloKnockoutWebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

export default class HelloKnockoutViewModel {
  public description: KnockoutObservable<string> = ko.observable('');

  public helloKnockoutClass: string = styles.helloKnockout;
  public containerClass: string = styles.container;
  public rowClass: string = styles.row;
  public columnClass: string = styles.column;
  public titleClass: string = styles.title;
  public subTitleClass: string = styles.subTitle;
  public descriptionClass: string = styles.description;
  public buttonClass: string = styles.button;
  public labelClass: string = styles.label;

  constructor(bindings: IHelloKnockoutBindingContext) {
    this.description(bindings.description);

    // When web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');
  }
}
