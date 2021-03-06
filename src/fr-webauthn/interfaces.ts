import HiddenValueCallback from '../fr-auth/callbacks/hidden-value-callback';
import MetadataCallback from '../fr-auth/callbacks/metadata-callback';

interface RelyingParty {
  name: string;
  id?: string;
}

interface WebAuthnRegistrationMetadata {
  attestationPreference: 'none' | 'indirect' | 'direct';
  authenticatorSelection: string;
  challenge: string;
  pubKeyCredParams: string;
  relyingPartyId: string;
  relyingPartyName: string;
  timeout: number;
  userId: string;
  userName: string;
}

interface WebAuthnAuthenticationMetadata {
  acceptableCredentials: string;
  challenge: string;
  relyingPartyId: string;
  timeout: number;
}

interface WebAuthnCallbacks {
  hiddenCallback?: HiddenValueCallback;
  metadataCallback?: MetadataCallback;
}

interface ParsedCredential {
  id: ArrayBuffer | SharedArrayBuffer;
  type: 'public-key';
}

interface ResponseCredential {
  response: { clientDataJSON: ArrayBuffer };
}

export {
  ParsedCredential,
  RelyingParty,
  ResponseCredential,
  WebAuthnCallbacks,
  WebAuthnAuthenticationMetadata,
  WebAuthnRegistrationMetadata,
};
