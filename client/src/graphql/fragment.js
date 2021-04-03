import { gql } from "@apollo/client";

export const SOVREN_RESPONSE = gql`
  fragment SovrenRes on SovrenResponse {
    Value {
      ResumeData {
        ContactInformation {
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
      }
    }
  }
`;
