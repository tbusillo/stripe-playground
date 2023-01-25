declare namespace stripeJs {
  export interface StripeAddressElement {
    getValue(): Pick<
      stripeJs.StripeAddressElementChangeEvent,
      'complete' | 'isNewAddress' | 'value'
    >;
  }

  export interface StripeAddressElementChangeEvent {
    /**
     * The type of element that emitted this event.
     */
    elementType: 'address';

    /**
     * The mode of the AddressElement that emitted this event.
     */
    elementMode: 'billing' | 'shipping';

    /**
     * Whether or not the AddressElement is currently empty.
     */
    empty: boolean;

    /**
     * Whether or not the AddressElement is complete.
     */
    complete: boolean;

    /**
     * Whether or not the address is new.
     */
    isNewAddress: boolean;

    /**
     * An object containing the current address.
     */
    value: {
      name: string;
      firstName?: string;
      lastName?: string;
      address: {
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        postal_code: string;
        country: string;
      };
      phone?: string;
    };
  }
}
