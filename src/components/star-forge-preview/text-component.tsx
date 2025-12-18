import React from 'react';

import { Text } from '@/components/star-forge/text';

const TextComponent = () => {
  return (
    <section>
      <Text.Header>Example text for &lt;header&gt;</Text.Header>
      <Text.H1>Example text for &lt;h1&gt;</Text.H1>
      <Text.H2>Example text for &lt;h2&gt;</Text.H2>
      <Text.H3>Example text for &lt;h3&gt;</Text.H3>
      <Text.H4>Example text for &lt;h4&gt;</Text.H4>
      <Text.H5>Example text for &lt;h5&gt;</Text.H5>
      <Text.H6>Example text for &lt;h6&gt;</Text.H6>
      <Text.P>Example text for &lt;p&gt;</Text.P>

      <div className="flex flex-col">
        <Text.Span>Example text for &lt;span&gt;</Text.Span>
        <Text.Link href="#">Example text for &lt;a&gt;</Text.Link>
        <Text.Small>Example text for &lt;small&gt;</Text.Small>
        <Text.Strong>Example text for &lt;strong&gt;</Text.Strong>
        <Text.Em>Example text for &lt;em&gt;</Text.Em>
        <Text.Blockquote>Example text for &lt;blockquote&gt;</Text.Blockquote>
        <Text.Cite>Example text for &lt;cite&gt;</Text.Cite>
        <Text.Q>Example text for &lt;q&gt;</Text.Q>
        <Text.Abbr title="HyperText Markup Language">HTML</Text.Abbr>
        <Text.Del>Example text for &lt;del&gt;</Text.Del>
        <Text.Ins>Example text for &lt;ins&gt;</Text.Ins>
      </div>
    </section>
  );
};

export default TextComponent;
