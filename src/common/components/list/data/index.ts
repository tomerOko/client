export interface ListElementState<
  DataForSubButton extends Record<string, any>
> {
  imageUrl?: string;
  header: string;
  secondHeader?: string;
  description: string;
  additionalData: DataForSubButton;
}

export interface ListProps<DataForSubButton extends Record<string, any>> {
  data: Array<ListElementState<DataForSubButton>>;
  ActionButtons?: React.FC<{ data: DataForSubButton }>;
  ElementExtension?: React.FC<{ data: DataForSubButton }>;
  header?: string;
  NewElementForm?: React.FC<{
    onClose: () => void;
  }>;
}

export interface ListElementPops<DataForSubButton extends Record<string, any>> {
  data: ListElementState<DataForSubButton>;
  ActionButtons?: React.FC<{ data: DataForSubButton }>;
  ElementExtension?: React.FC<{ data: DataForSubButton }>;
}
