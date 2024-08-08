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
  ShownActionButtons?: React.FC<{ data: DataForSubButton }>;
  ElementExtension?: React.FC<{ data: DataForSubButton }>;
}

export interface ListElementPops<DataForSubButton extends Record<string, any>> {
  data: ListElementState<DataForSubButton>;
  ShownActionButtons?: React.FC<{ data: DataForSubButton }>;
  ElementExtension?: React.FC<{ data: DataForSubButton }>;
}
