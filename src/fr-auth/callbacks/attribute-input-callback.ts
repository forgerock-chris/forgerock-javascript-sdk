import FRCallback from '.';
import { Callback, PolicyRequirement } from '../../auth/interfaces';

/**
 * Represents a callback used to collect attributes.
 *
 * @typeparam T Maps to StringAttributeInputCallback and BooleanAttributeInputCallback, respectively
 */
class AttributeInputCallback<T extends string | boolean> extends FRCallback {
  /**
   * @param payload The raw payload returned by OpenAM
   */
  constructor(public payload: Callback) {
    super(payload);
  }

  /**
   * Gets the attribute name.
   */
  public getName(): string {
    return this.getOutputByName<string>('name', '');
  }

  /**
   * Gets the attribute prompt.
   */
  public getPrompt(): string {
    return this.getOutputByName<string>('prompt', '');
  }

  /**
   * Gets whether the attribute is required.
   */
  public isRequired(): boolean {
    return this.getOutputByName<boolean>('required', false);
  }

  /**
   * Gets the callback's failed policies.
   */
  public getFailedPolicies(): PolicyRequirement[] {
    return this.getOutputByName<PolicyRequirement[]>('failedPolicies', []);
  }

  /**
   * Gets the callback's applicable policies.
   */
  public getPolicies(): string[] {
    return this.getOutputByName<string[]>('policies', []);
  }

  /**
   * Sets the attribute's value.
   */
  public setValue(value: T): void {
    this.setInputValue(value);
  }
}

export default AttributeInputCallback;
