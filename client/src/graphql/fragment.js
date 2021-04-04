import { gql } from "@apollo/client";

export const CONTACT_INFORMATION = gql`
  fragment ContactInfo on ContactInformation {
    CandidateName {
      FormattedName
      FamilyName
      GivenName
    }
    EmailAddresses
    Location {
      PostalCode
      Municipality
    }
    Telephones {
      Raw
      Normalized
      SubscriberNumber
    }
  }
`;
