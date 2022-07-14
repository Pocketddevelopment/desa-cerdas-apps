import DocumentFormatInterface from '@service/models/interfaces/DocumentFormat.interface';

export const getDocumentFormList = (list: DocumentFormatInterface[]) => {
  const formatList = list.map((e) => {
    return {
      value: e.ID,
      label: e.Name,
      data: e.Input,
    };
  });
  return formatList;
};
