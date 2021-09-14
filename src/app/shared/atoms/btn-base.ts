import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: '',
})
export abstract class ButtonBase {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  public primary = false;

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  public mode?: string = 'default';

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  public toggle = false;

   /**
   * Is this the principal call to action on the page?
   */
    @Input()
    public disabled = false;

  /**
   * What background color to use
   */
  @Input()
  public backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  public size: 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  public label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  public onClick = new EventEmitter<Event>();
}
