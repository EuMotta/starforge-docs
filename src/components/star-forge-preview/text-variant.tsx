import React from 'react';

import Text from '@/components/star-forge/text-variant';

const TextVariant = () => {
  return (
    <section>
      <Text variant="header">Example text for &lt;header&gt;</Text>
      <Text variant="h1">Example text for &lt;h1&gt;</Text>
      <Text variant="h2">Example text for &lt;h2&gt;</Text>
      <Text variant="h3">Example text for &lt;h3&gt;</Text>
      <Text variant="h4">Example text for &lt;h4&gt;</Text>
      <Text variant="h5">Example text for &lt;h5&gt;</Text>
      <Text variant="h6">Example text for &lt;h6&gt;</Text>
      <Text variant="p">Example text for &lt;p&gt;</Text>

      <div className="flex flex-col">
        <Text variant="span">Example text for &lt;span&gt;</Text>
        <Text variant="a" href="#">
          Example text for &lt;a&gt;
        </Text>
        <Text variant="small">Example text for &lt;small&gt;</Text>
        <Text variant="strong">Example text for &lt;strong&gt;</Text>
        <Text variant="em">Example text for &lt;em&gt;</Text>
        <Text variant="blockquote">Example text for &lt;blockquote&gt;</Text>
        <Text variant="cite">Example text for &lt;cite&gt;</Text>
        <Text variant="q">Example text for &lt;q&gt;</Text>
        <Text variant="abbr" title="HyperText Markup Language">
          HTML
        </Text>
        <Text variant="del">Example text for &lt;del&gt;</Text>
        <Text variant="ins">Example text for &lt;ins&gt;</Text>
      </div>
    </section>
  );
};

export default TextVariant;
