import React from 'react';

import { Text } from '@/components/star-forge/text';

const TextComponent = () => {
  return (
    <section>
      <Text.Header>Exemplo de texto para &lt;header&gt;</Text.Header>
      <Text.H1>Exemplo de texto para &lt;h1&gt;</Text.H1>
      <Text.H2>Exemplo de texto para &lt;h2&gt;</Text.H2>
      <Text.H3>Exemplo de texto para &lt;h3&gt;</Text.H3>
      <Text.H4>Exemplo de texto para &lt;h4&gt;</Text.H4>
      <Text.H5>Exemplo de texto para &lt;h5&gt;</Text.H5>
      <Text.H6>Exemplo de texto para &lt;h6&gt;</Text.H6>
      <Text.P>Exemplo de texto para &lt;p&gt;</Text.P>
      <div className="flex flex-col">
        <Text.Span>Exemplo de texto para &lt;span&gt;</Text.Span>
        <Text.Link href="#">Exemplo de texto para &lt;a&gt;</Text.Link>
        <Text.Small>Exemplo de texto para &lt;small&gt;</Text.Small>
        <Text.Strong>Exemplo de texto para &lt;strong&gt;</Text.Strong>
        <Text.Em>Exemplo de texto para &lt;em&gt;</Text.Em>
        <Text.Blockquote>
          Exemplo de texto para &lt;blockquote&gt;
        </Text.Blockquote>
        <Text.Cite>Exemplo de texto para &lt;cite&gt;</Text.Cite>
        <Text.Q>Exemplo de texto para &lt;q&gt;</Text.Q>
        <Text.Abbr title="HyperText Markup Language">HTML</Text.Abbr>
        <Text.Del>Exemplo de texto para &lt;del&gt;</Text.Del>
        <Text.Ins>Exemplo de texto para &lt;ins&gt;</Text.Ins>
      </div>
    </section>
  );
};

export default TextComponent;
