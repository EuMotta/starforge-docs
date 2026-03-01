import React from 'react';

import Typography1 from '@/components/star-forge/typography-variant-1';

const TextVariant = () => {
  return (
    <section className="py-2">
      <Typography1 variant="header">
        Example text for &lt;header&gt;
      </Typography1>
      <Typography1 variant="h1">Example text for &lt;h1&gt;</Typography1>
      <Typography1 variant="h2">Example text for &lt;h2&gt;</Typography1>
      <Typography1 variant="h3">Example text for &lt;h3&gt;</Typography1>
      <Typography1 variant="h4">Example text for &lt;h4&gt;</Typography1>
      <Typography1 variant="h5">Example text for &lt;h5&gt;</Typography1>
      <Typography1 variant="h6">Example text for &lt;h6&gt;</Typography1>
      <Typography1 variant="p">Example text for &lt;p&gt;</Typography1>

      <div className="flex flex-col">
        <Typography1 variant="span">Example text for &lt;span&gt;</Typography1>

        <Typography1 variant="a" href="#">
          Example text for &lt;a&gt;
        </Typography1>

        <Typography1 variant="small">
          Example text for &lt;small&gt;
        </Typography1>

        <Typography1 variant="strong">
          Example text for &lt;strong&gt;
        </Typography1>

        <Typography1 variant="em">Example text for &lt;em&gt;</Typography1>

        <Typography1 variant="blockquote">
          Example text for &lt;blockquote&gt;
        </Typography1>

        <Typography1 variant="cite">Example text for &lt;cite&gt;</Typography1>
        <Typography1 variant="q">Example text for &lt;q&gt;</Typography1>
        <Typography1 variant="abbr" title="HyperText Markup Language">
          HTML
        </Typography1>

        <Typography1 variant="del">Example text for &lt;del&gt;</Typography1>
        <Typography1 variant="ins">Example text for &lt;ins&gt;</Typography1>
      </div>
    </section>
  );
};

export default TextVariant;
