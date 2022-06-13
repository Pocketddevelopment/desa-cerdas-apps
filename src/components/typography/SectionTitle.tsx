import React from 'react';
import Title from './Title';

type SectionTitleProps = {
  children: string;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <Title size={14}>{children}</Title>;
};

export default SectionTitle;
