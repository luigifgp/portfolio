

export interface portfolioState {
  sidebar: boolean ;
  formSubmitted: boolean;
  modalOpen: boolean;
  formData: FormData;
}


export interface FormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
} 