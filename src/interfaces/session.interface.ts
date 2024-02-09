export interface ConfigInicial {
  configInicial : string;
}

export interface SessionValidateCard {
  title: string;
  subtitle: string;
  type: string;
  selector: string;
  button: string;
  frase: string;
  sendAction: string;
}

export interface SessionConfig {
  sessionConfig : SessionValidateCard
}

export interface SessionForm {
  formConfig : SessionValidateCard
}


export interface SessionCardTitle {
   title: string,
   subtitle: string
}

export interface SessionCardFooter {
  frase: string,
  sendAction: string,
  type: string
}

export interface SessionHandelSubmit {
  (event?: Event): Response | undefined;
}