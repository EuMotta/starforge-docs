import React from 'react';

import Text from '@/components/star-forge/text-variant';

const TextVariant = () => {
  return (
    <section>
      <Text variant="header">Exemplo de texto para &lt;header&gt;</Text>
      <Text variant="h1">Exemplo de texto para &lt;h1&gt;</Text>
      <Text variant="h2">Exemplo de texto para &lt;h2&gt;</Text>
      <Text variant="h3">Exemplo de texto para &lt;h3&gt;</Text>
      <Text variant="h4">Exemplo de texto para &lt;h4&gt;</Text>
      <Text variant="h5">Exemplo de texto para &lt;h5&gt;</Text>
      <Text variant="h6">Exemplo de texto para &lt;h6&gt;</Text>
      <Text variant="p">Exemplo de texto para &lt;p&gt;</Text>
      <div className="flex flex-col">
        <Text variant="span">Exemplo de texto para &lt;span&gt;</Text>
        <Text variant="a" href="#">
          Exemplo de texto para &lt;a&gt;
        </Text>
        <Text variant="small">Exemplo de texto para &lt;small&gt;</Text>
        <Text variant="strong">Exemplo de texto para &lt;strong&gt;</Text>
        <Text variant="em">Exemplo de texto para &lt;em&gt;</Text>
        <Text variant="blockquote">
          Exemplo de texto para &lt;blockquote&gt;
        </Text>
        <Text variant="cite">Exemplo de texto para &lt;cite&gt;</Text>
        <Text variant="q">Exemplo de texto para &lt;q&gt;</Text>
        <Text variant="abbr" title="HyperText Markup Language">
          HTML
        </Text>
        <Text variant="del">Exemplo de texto para &lt;del&gt;</Text>
        <Text variant="ins">Exemplo de texto para &lt;ins&gt;</Text>
      </div>
    </section>
  );
};

export default TextVariant;
